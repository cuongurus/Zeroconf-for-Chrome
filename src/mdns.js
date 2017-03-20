var packet = require('dns-packet');
var socket = chrome.sockets.udp;
var dnsTxt = require('dns-txt');
var Buffer = require('buffer').Buffer;

var TLD = '.local';
var WILDCARD = '_services._dns-sd._udp' + TLD;

/**
 * Service
 */
var Service = function (callback) {
    this.name = '';
    this.type = '';
    this.fqdn = '';
    this.host = '';
    this.port = '';
    this.ipv4 = '';
    this.ipv6 = '';
    this.txt = '';
    this.callback_ = callback;
};

/**
 * Contruction from an array
 * @param {array} answers
 * @param {object} opt
 */

Service.prototype.serialize = function (answers, opt) {
    var self = this;
    if (!opt.host) callback_('Required hostname not given');
    if (!opt.ipv4) callback_('Required ipv4 not given');
    if (!opt.ipv6) callback_('Required ipv6 not given');
    this.host = opt.host;
    this.ipv4 = opt.ipv4;
    this.ipv6 = opt.ipv6;
    answers.forEach(function (ans) {
        switch (ans.type) {
            case 'PTR':
                self.fqdn = ans.data;
                self.name = ans.data.split('.', 1)[0];
                self.type = ans.name.slice(0, -6);
                break;

            case 'TXT':
                var _txt = new dnsTxt();
                self.txt = _txt.decode(ans.data);
                break;

            case 'SRV':
                self.port = ans.data.port;
                break;

            case 'AAAA':
                self.ipv6 = ans.data;
                self.host = ans.name;
                break;

            case 'A':
                self.ipv4 = ans.data;
                self.host = ans.name;
        }
    });
    return self;
};

/**
 * Browser
 * @param {function} callback 
 * @param {string} type 
 */

var Browser = function (callback, type) {
    this.callback_ = callback;
    this.type_ = WILDCARD;
    if (type.length != 0) this.type_ = type + TLD;
    this.found = false;
    this.servTypes = [];
    this.socketInfo;
    this.services = [];

    // Set up receive handlers.
    this.onReceiveListener_ = this.onReceive_.bind(this);
    socket.onReceive.addListener(this.onReceiveListener_);
    this.onReceiveErrorListener_ = this.onReceiveError_.bind(this);
    socket.onReceiveError.addListener(this.onReceiveErrorListener_);

    Browser.forEachAddress_(function (address, error) {
        if (error) {
            this.callback_(error);
            return true;
        } else {

        }
        if (address.indexOf(':') != -1) {
            // TODO: ipv6.
            console.log('IPv6 address unsupported', address);
            return true;
        }
        console.log('Broadcasting to address', address);

        Browser.bindToAddress_(address, function (socket) {
            if (!socket) {
                this.callback_('could not bind UDP socket');
                return true;
            }
            // Broadcast on it.
            this.broadcast_(socket, address);
        }.bind(this));
    }.bind(this));

    // After a short time, if our database is empty, report an error.
    setTimeout(function () {
        if (!this.found) {
            this.callback_('no mDNS services found!');
        }
    }.bind(this), 10 * 1000);

};

Browser.forEachAddress_ = function (callback) {
    chrome.system.network.getNetworkInterfaces(function (networkInterfaces) {
        if (!networkInterfaces.length) {
            callback(null, 'no network available!');
            return true;
        }
        networkInterfaces.forEach(function (networkInterface) {
            callback(networkInterface['address'], null);
        });
    });
};

Browser.bindToAddress_ = function (address, callback) {
    socket.create({}, function (createInfo) {
        socketInfo = createInfo;
        socket.bind(createInfo['socketId'], address, 0,
            function (result) {
                callback((result >= 0) ? createInfo['socketId'] : null);
            });
    });
};

Browser.prototype.broadcast_ = function (sock, address) {
    var self = this;
    var buf = packet.encode({
        type: 'query',
        id: 0,
        flags: 0 << 8,
        questions: [{
            type: 'PTR',
            name: self.type_
        }]
    }).buffer;

    socket.send(sock, buf, '224.0.0.251', 5353, function (sendInfo) {
        console.debug('Send: ' + sendInfo.resultCode);
        if (sendInfo.resultCode < 0)
            this.callback_('Could not send data to:' + address);
    });
};

Browser.prototype.onReceive_ = function (info) {
    console.debug('Received');
    var query = packet.decode(new Buffer(info.data));
    var ans = (query.answers).concat(query.additionals);
    var self = this;
    self.found = true;
    var boo = ans[0].name == WILDCARD;

    if (boo) {
        ans.forEach(function (answer) {
            if (self.servTypes.indexOf(answer.data) != -1) {
                return;
            } else {
                console.debug('Found: ' + answer.data);
                self.servTypes.push(answer.data);

                var buff = packet.encode({
                    type: 'query',
                    id: 0,
                    flags: 0 << 8,
                    questions: [{
                        type: '*',
                        name: answer.data
                    }]
                }).buffer;

                socket.send(socketInfo.socketId, buff, '224.0.0.251', 5353, function (sendInfo) {
                    console.debug('Send result: ' + sendInfo.resultCode);
                });
            }
        });
    } else {
        var i = 0;
        self.services.length = 0;
        var k = 5;
        var opt = {
            host: '',
            ipv4: '',
            ipv6: ''
        };
        var j = 0;

        while (j < 5 && j < ans.length) {
            switch (ans[j].type) {
                case 'AAAA':
                    opt.host = ans[j].name;
                    opt.ipv6 = ans[j].data;
                    break;
                case 'A':
                    opt.host = ans[j].name;
                    opt.ipv4 = ans[j].data;
                    break;

            }
            j++;
        };

        if (opt.ipv4 == '' || opt.ipv6 == '') k = 4;

        while (i < ans.length) {
            if (i > 3) k = 3;
            var rec = ans.slice(i, i + k);
            console.debug(JSON.stringify(rec, '', 4));
            var S = new Service(function (err) {
                console.debug(err);
            });
            // var s = 
            S.serialize(rec, opt);
            self.services.push(S);
            i += k;
        };

        self.callback_();
    }
};

Browser.prototype.onReceiveError_ = function (info) {
    this.callback_(info.resultCode);
    return true;
};

Browser.prototype.shutdown = function () {
    // Remove event listeners.
    socket.onReceive.removeListener(this.onReceiveListener_);
    socket.onReceiveError.removeListener(this.onReceiveErrorListener_);
    // Close opened sockets.
    socket.getSockets(function (sockets) {
        sockets.forEach(function (sock) {
            socket.close(sock.socketId);
        });
    });
};
