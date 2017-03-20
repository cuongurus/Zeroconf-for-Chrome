window.addEventListener('load', function () {
    var results = document.getElementById('results');
    var input = document.getElementById("ServiceType");
    var browseBtn = document.getElementById('browse');
    var finder;

    input.onkeydown = function(ev){
        if(ev.which == 13){
            refresh();
        }
    }

    var getType = function (key) {
        if (key in serviceTypes) {
            return " - " + serviceTypes[key];
        } else {
            return '';
        }
    };

    var callback_ = function (ret_err) {
        results.classList.remove('working');

        if (ret_err) {
            var s = document.createElement('strong');
            s.classList.add('warning');
            s.innerText = ret_err;
            results.appendChild(s);
            return console.warn(ret_err);
        }

        var out = finder.services;
        out.forEach(function (o) {
            var li = document.createElement('li');
            li.innerHTML = o.name;
            results.appendChild(li);

            var ul = document.createElement('ul');
            ul.innerHTML = "ServiceType: " + o.type + getType(o.type) + "</br>" +
                "Hostname: " + o.host + "</br>" +
                "Port: " + o.port + "</br>" +
                "IPv4: " + o.ipv4 + "</br>" +
                "IPv6: " + o.ipv6 + "</br>" +
                "TXT: " + JSON.stringify(o.txt, '', 4);
            results.appendChild(ul);
        })
    }

    var refresh = function () {
        browseBtn.innerHTML = 'Refresh';
        results.innerHTML = '';
        results.classList.add('working');
        finder && finder.shutdown();
        finder = new Browser(callback_, input.value);
    };

    browseBtn.addEventListener('click', refresh);


});