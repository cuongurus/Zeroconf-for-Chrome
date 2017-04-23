require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e)
      }, l, l.exports, e, t, n, r)
    }
    return n[o].exports
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s
})({
  1: [function (require, module, exports) {
    (function (Buffer) {
      module.exports = function bufferIndexOf(buff, search, offset, encoding) {
        if (!Buffer.isBuffer(buff)) {
          throw TypeError('buffer is not a buffer');
        }

        // allow optional offset when providing an encoding
        if (encoding === undefined && typeof offset === 'string') {
          encoding = offset;
          offset = undefined;
        }

        if (typeof search === 'string') {
          search = new Buffer(search, encoding || 'utf8');
        } else if (typeof search === 'number' && !isNaN(search)) {
          search = new Buffer([search])
        } else if (!Buffer.isBuffer(search)) {
          throw TypeError('search is not a bufferable object');
        }

        if (search.length === 0) {
          return -1;
        }

        if (offset === undefined || (typeof offset === 'number' && isNaN(offset))) {
          offset = 0;
        } else if (typeof offset !== 'number') {
          throw TypeError('offset is not a number');
        }

        if (offset < 0) {
          offset = buff.length + offset
        }

        if (offset < 0) {
          offset = 0;
        }

        var m = 0;
        var s = -1;

        for (var i = offset; i < buff.length; ++i) {
          if (buff[i] != search[m]) {
            s = -1;
            // <-- go back
            // match abc to aabc
            // 'aabc'
            // 'aab'
            //    ^ no match
            // a'abc'
            //   ^ set index here now and look at these again.
            //   'abc' yay!
            i -= m - 1
            m = 0;
          }

          if (buff[i] == search[m]) {
            if (s == -1) {
              s = i;
            }
            ++m;
            if (m == search.length) {
              break;
            }
          }
        }

        if (s > -1 && buff.length - s < search.length) {
          return -1;
        }
        return s;
      }



    }).call(this, require("buffer").Buffer)
  }, {
    "buffer": "buffer"
  }],
  2: [function (require, module, exports) {
    exports.toString = function (type) {
      switch (type) {
        case 1:
          return 'A'
        case 10:
          return 'NULL'
        case 28:
          return 'AAAA'
        case 18:
          return 'AFSDB'
        case 42:
          return 'APL'
        case 257:
          return 'CAA'
        case 60:
          return 'CDNSKEY'
        case 59:
          return 'CDS'
        case 37:
          return 'CERT'
        case 5:
          return 'CNAME'
        case 49:
          return 'DHCID'
        case 32769:
          return 'DLV'
        case 39:
          return 'DNAME'
        case 48:
          return 'DNSKEY'
        case 43:
          return 'DS'
        case 55:
          return 'HIP'
        case 13:
          return 'HINFO'
        case 45:
          return 'IPSECKEY'
        case 25:
          return 'KEY'
        case 36:
          return 'KX'
        case 29:
          return 'LOC'
        case 15:
          return 'MX'
        case 35:
          return 'NAPTR'
        case 2:
          return 'NS'
        case 47:
          return 'NSEC'
        case 50:
          return 'NSEC3'
        case 51:
          return 'NSEC3PARAM'
        case 12:
          return 'PTR'
        case 46:
          return 'RRSIG'
        case 17:
          return 'RP'
        case 24:
          return 'SIG'
        case 6:
          return 'SOA'
        case 99:
          return 'SPF'
        case 33:
          return 'SRV'
        case 44:
          return 'SSHFP'
        case 32768:
          return 'TA'
        case 249:
          return 'TKEY'
        case 52:
          return 'TLSA'
        case 250:
          return 'TSIG'
        case 16:
          return 'TXT'
        case 252:
          return 'AXFR'
        case 251:
          return 'IXFR'
        case 41:
          return 'OPT'
        case 255:
          return 'ANY'
      }
      return 'UNKNOWN_' + type
    }

    exports.toType = function (name) {
      switch (name.toUpperCase()) {
        case 'A':
          return 1
        case 'NULL':
          return 10
        case 'AAAA':
          return 28
        case 'AFSDB':
          return 18
        case 'APL':
          return 42
        case 'CAA':
          return 257
        case 'CDNSKEY':
          return 60
        case 'CDS':
          return 59
        case 'CERT':
          return 37
        case 'CNAME':
          return 5
        case 'DHCID':
          return 49
        case 'DLV':
          return 32769
        case 'DNAME':
          return 39
        case 'DNSKEY':
          return 48
        case 'DS':
          return 43
        case 'HIP':
          return 55
        case 'HINFO':
          return 13
        case 'IPSECKEY':
          return 45
        case 'KEY':
          return 25
        case 'KX':
          return 36
        case 'LOC':
          return 29
        case 'MX':
          return 15
        case 'NAPTR':
          return 35
        case 'NS':
          return 2
        case 'NSEC':
          return 47
        case 'NSEC3':
          return 50
        case 'NSEC3PARAM':
          return 51
        case 'PTR':
          return 12
        case 'RRSIG':
          return 46
        case 'RP':
          return 17
        case 'SIG':
          return 24
        case 'SOA':
          return 6
        case 'SPF':
          return 99
        case 'SRV':
          return 33
        case 'SSHFP':
          return 44
        case 'TA':
          return 32768
        case 'TKEY':
          return 249
        case 'TLSA':
          return 52
        case 'TSIG':
          return 250
        case 'TXT':
          return 16
        case 'AXFR':
          return 252
        case 'IXFR':
          return 251
        case 'OPT':
          return 41
        case 'ANY':
          return 255
        case '*':
          return 255
      }
      return 0
    }

  }, {}],
  3: [function (require, module, exports) {
    'use strict';

    var ip = exports;
    var Buffer = require('buffer').Buffer;
    var os = require('os');

    ip.toBuffer = function (ip, buff, offset) {
      offset = ~~offset;

      var result;

      if (this.isV4Format(ip)) {
        result = buff || new Buffer(offset + 4);
        ip.split(/\./g).map(function (byte) {
          result[offset++] = parseInt(byte, 10) & 0xff;
        });
      } else if (this.isV6Format(ip)) {
        var sections = ip.split(':', 8);

        var i;
        for (i = 0; i < sections.length; i++) {
          var isv4 = this.isV4Format(sections[i]);
          var v4Buffer;

          if (isv4) {
            v4Buffer = this.toBuffer(sections[i]);
            sections[i] = v4Buffer.slice(0, 2).toString('hex');
          }

          if (v4Buffer && ++i < 8) {
            sections.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
          }
        }

        if (sections[0] === '') {
          while (sections.length < 8) sections.unshift('0');
        } else if (sections[sections.length - 1] === '') {
          while (sections.length < 8) sections.push('0');
        } else if (sections.length < 8) {
          for (i = 0; i < sections.length && sections[i] !== ''; i++);
          var argv = [i, 1];
          for (i = 9 - sections.length; i > 0; i--) {
            argv.push('0');
          }
          sections.splice.apply(sections, argv);
        }

        result = buff || new Buffer(offset + 16);
        for (i = 0; i < sections.length; i++) {
          var word = parseInt(sections[i], 16);
          result[offset++] = (word >> 8) & 0xff;
          result[offset++] = word & 0xff;
        }
      }

      if (!result) {
        throw Error('Invalid ip address: ' + ip);
      }

      return result;
    };

    ip.toString = function (buff, offset, length) {
      offset = ~~offset;
      length = length || (buff.length - offset);

      var result = [];
      if (length === 4) {
        // IPv4
        for (var i = 0; i < length; i++) {
          result.push(buff[offset + i]);
        }
        result = result.join('.');
      } else if (length === 16) {
        // IPv6
        for (var i = 0; i < length; i += 2) {
          result.push(buff.readUInt16BE(offset + i).toString(16));
        }
        result = result.join(':');
        result = result.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
        result = result.replace(/:{3,4}/, '::');
      }

      return result;
    };

    var ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
    var ipv6Regex =
      /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

    ip.isV4Format = function (ip) {
      return ipv4Regex.test(ip);
    };

    ip.isV6Format = function (ip) {
      return ipv6Regex.test(ip);
    };

    function _normalizeFamily(family) {
      return family ? family.toLowerCase() : 'ipv4';
    }

    ip.fromPrefixLen = function (prefixlen, family) {
      if (prefixlen > 32) {
        family = 'ipv6';
      } else {
        family = _normalizeFamily(family);
      }

      var len = 4;
      if (family === 'ipv6') {
        len = 16;
      }
      var buff = new Buffer(len);

      for (var i = 0, n = buff.length; i < n; ++i) {
        var bits = 8;
        if (prefixlen < 8) {
          bits = prefixlen;
        }
        prefixlen -= bits;

        buff[i] = ~(0xff >> bits) & 0xff;
      }

      return ip.toString(buff);
    };

    ip.mask = function (addr, mask) {
      addr = ip.toBuffer(addr);
      mask = ip.toBuffer(mask);

      var result = new Buffer(Math.max(addr.length, mask.length));

      // Same protocol - do bitwise and
      if (addr.length === mask.length) {
        for (var i = 0; i < addr.length; i++) {
          result[i] = addr[i] & mask[i];
        }
      } else if (mask.length === 4) {
        // IPv6 address and IPv4 mask
        // (Mask low bits)
        for (var i = 0; i < mask.length; i++) {
          result[i] = addr[addr.length - 4 + i] & mask[i];
        }
      } else {
        // IPv6 mask and IPv4 addr
        for (var i = 0; i < result.length - 6; i++) {
          result[i] = 0;
        }

        // ::ffff:ipv4
        result[10] = 0xff;
        result[11] = 0xff;
        for (var i = 0; i < addr.length; i++) {
          result[i + 12] = addr[i] & mask[i + 12];
        }
      }

      return ip.toString(result);
    };

    ip.cidr = function (cidrString) {
      var cidrParts = cidrString.split('/');

      var addr = cidrParts[0];
      if (cidrParts.length !== 2)
        throw new Error('invalid CIDR subnet: ' + addr);

      var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));

      return ip.mask(addr, mask);
    };

    ip.subnet = function (addr, mask) {
      var networkAddress = ip.toLong(ip.mask(addr, mask));

      // Calculate the mask's length.
      var maskBuffer = ip.toBuffer(mask);
      var maskLength = 0;

      for (var i = 0; i < maskBuffer.length; i++) {
        if (maskBuffer[i] === 0xff) {
          maskLength += 8;
        } else {
          var octet = maskBuffer[i] & 0xff;
          while (octet) {
            octet = (octet << 1) & 0xff;
            maskLength++;
          }
        }
      }

      var numberOfAddresses = Math.pow(2, 32 - maskLength);

      return {
        networkAddress: ip.fromLong(networkAddress),
        firstAddress: numberOfAddresses <= 2 ?
          ip.fromLong(networkAddress) : ip.fromLong(networkAddress + 1),
        lastAddress: numberOfAddresses <= 2 ?
          ip.fromLong(networkAddress + numberOfAddresses - 1) : ip.fromLong(networkAddress + numberOfAddresses - 2),
        broadcastAddress: ip.fromLong(networkAddress + numberOfAddresses - 1),
        subnetMask: mask,
        subnetMaskLength: maskLength,
        numHosts: numberOfAddresses <= 2 ?
          numberOfAddresses : numberOfAddresses - 2,
        length: numberOfAddresses,
        contains: function (other) {
          return networkAddress === ip.toLong(ip.mask(other, mask));
        }
      };
    };

    ip.cidrSubnet = function (cidrString) {
      var cidrParts = cidrString.split('/');

      var addr = cidrParts[0];
      if (cidrParts.length !== 2)
        throw new Error('invalid CIDR subnet: ' + addr);

      var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));

      return ip.subnet(addr, mask);
    };

    ip.not = function (addr) {
      var buff = ip.toBuffer(addr);
      for (var i = 0; i < buff.length; i++) {
        buff[i] = 0xff ^ buff[i];
      }
      return ip.toString(buff);
    };

    ip.or = function (a, b) {
      a = ip.toBuffer(a);
      b = ip.toBuffer(b);

      // same protocol
      if (a.length === b.length) {
        for (var i = 0; i < a.length; ++i) {
          a[i] |= b[i];
        }
        return ip.toString(a);

        // mixed protocols
      } else {
        var buff = a;
        var other = b;
        if (b.length > a.length) {
          buff = b;
          other = a;
        }

        var offset = buff.length - other.length;
        for (var i = offset; i < buff.length; ++i) {
          buff[i] |= other[i - offset];
        }

        return ip.toString(buff);
      }
    };

    ip.isEqual = function (a, b) {
      a = ip.toBuffer(a);
      b = ip.toBuffer(b);

      // Same protocol
      if (a.length === b.length) {
        for (var i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }

      // Swap
      if (b.length === 4) {
        var t = b;
        b = a;
        a = t;
      }

      // a - IPv4, b - IPv6
      for (var i = 0; i < 10; i++) {
        if (b[i] !== 0) return false;
      }

      var word = b.readUInt16BE(10);
      if (word !== 0 && word !== 0xffff) return false;

      for (var i = 0; i < 4; i++) {
        if (a[i] !== b[i + 12]) return false;
      }

      return true;
    };

    ip.isPrivate = function (addr) {
      return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i
        .test(addr) ||
        /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
        /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
        .test(addr) ||
        /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
        /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
        /^f[cd][0-9a-f]{2}:/i.test(addr) ||
        /^fe80:/i.test(addr) ||
        /^::1$/.test(addr) ||
        /^::$/.test(addr);
    };

    ip.isPublic = function (addr) {
      return !ip.isPrivate(addr);
    };

    ip.isLoopback = function (addr) {
      return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
        .test(addr) ||
        /^fe80::1$/.test(addr) ||
        /^::1$/.test(addr) ||
        /^::$/.test(addr);
    };

    ip.loopback = function (family) {
      //
      // Default to `ipv4`
      //
      family = _normalizeFamily(family);

      if (family !== 'ipv4' && family !== 'ipv6') {
        throw new Error('family must be ipv4 or ipv6');
      }

      return family === 'ipv4' ? '127.0.0.1' : 'fe80::1';
    };

    //
    // ### function address (name, family)
    // #### @name {string|'public'|'private'} **Optional** Name or security
    //      of the network interface.
    // #### @family {ipv4|ipv6} **Optional** IP family of the address (defaults
    //      to ipv4).
    //
    // Returns the address for the network interface on the current system with
    // the specified `name`:
    //   * String: First `family` address of the interface.
    //             If not found see `undefined`.
    //   * 'public': the first public ip address of family.
    //   * 'private': the first private ip address of family.
    //   * undefined: First address with `ipv4` or loopback address `127.0.0.1`.
    //
    ip.address = function (name, family) {
      var interfaces = os.networkInterfaces();
      var all;

      //
      // Default to `ipv4`
      //
      family = _normalizeFamily(family);

      //
      // If a specific network interface has been named,
      // return the address.
      //
      if (name && name !== 'private' && name !== 'public') {
        var res = interfaces[name].filter(function (details) {
          var itemFamily = details.family.toLowerCase();
          return itemFamily === family;
        });
        if (res.length === 0)
          return undefined;
        return res[0].address;
      }

      var all = Object.keys(interfaces).map(function (nic) {
        //
        // Note: name will only be `public` or `private`
        // when this is called.
        //
        var addresses = interfaces[nic].filter(function (details) {
          details.family = details.family.toLowerCase();
          if (details.family !== family || ip.isLoopback(details.address)) {
            return false;
          } else if (!name) {
            return true;
          }

          return name === 'public' ? ip.isPrivate(details.address) :
            ip.isPublic(details.address);
        });

        return addresses.length ? addresses[0].address : undefined;
      }).filter(Boolean);

      return !all.length ? ip.loopback(family) : all[0];
    };

    ip.toLong = function (ip) {
      var ipl = 0;
      ip.split('.').forEach(function (octet) {
        ipl <<= 8;
        ipl += parseInt(octet);
      });
      return (ipl >>> 0);
    };

    ip.fromLong = function (ipl) {
      return ((ipl >>> 24) + '.' +
        (ipl >> 16 & 255) + '.' +
        (ipl >> 8 & 255) + '.' +
        (ipl & 255));
    };

  }, {
    "buffer": "buffer",
    "os": 7
  }],
  4: [function (require, module, exports) {
    module.exports = require('buffer')

  }, {
    "buffer": "buffer"
  }],
  5: [function (require, module, exports) {
    'use strict'

    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray

    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }

    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63

    function placeHoldersCount(b64) {
      var len = b64.length
      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
    }

    function byteLength(b64) {
      // base64 is 4/3 + up to two characters of the original data
      return b64.length * 3 / 4 - placeHoldersCount(b64)
    }

    function toByteArray(b64) {
      var i, j, l, tmp, placeHolders, arr
      var len = b64.length
      placeHolders = placeHoldersCount(b64)

      arr = new Arr(len * 3 / 4 - placeHolders)

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len

      var L = 0

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
        arr[L++] = (tmp >> 16) & 0xFF
        arr[L++] = (tmp >> 8) & 0xFF
        arr[L++] = tmp & 0xFF
      }

      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[L++] = tmp & 0xFF
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[L++] = (tmp >> 8) & 0xFF
        arr[L++] = tmp & 0xFF
      }

      return arr
    }

    function tripletToBase64(num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }

    function encodeChunk(uint8, start, end) {
      var tmp
      var output = []
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
        output.push(tripletToBase64(tmp))
      }
      return output.join('')
    }

    function fromByteArray(uint8) {
      var tmp
      var len = uint8.length
      var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
      var output = ''
      var parts = []
      var maxChunkLength = 16383 // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1]
        output += lookup[tmp >> 2]
        output += lookup[(tmp << 4) & 0x3F]
        output += '=='
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
        output += lookup[tmp >> 10]
        output += lookup[(tmp >> 4) & 0x3F]
        output += lookup[(tmp << 2) & 0x3F]
        output += '='
      }

      parts.push(output)

      return parts.join('')
    }

  }, {}],
  6: [function (require, module, exports) {
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m
      var eLen = nBytes * 8 - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var nBits = -7
      var i = isLE ? (nBytes - 1) : 0
      var d = isLE ? -1 : 1
      var s = buffer[offset + i]

      i += d

      e = s & ((1 << (-nBits)) - 1)
      s >>= (-nBits)
      nBits += eLen
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1)
      e >>= (-nBits)
      nBits += mLen
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen)
        e = e - eBias
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c
      var eLen = nBytes * 8 - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
      var i = isLE ? 0 : (nBytes - 1)
      var d = isLE ? 1 : -1
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

      value = Math.abs(value)

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0
        e = eMax
      } else {
        e = Math.floor(Math.log(value) / Math.LN2)
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--
          c *= 2
        }
        if (e + eBias >= 1) {
          value += rt / c
        } else {
          value += rt * Math.pow(2, 1 - eBias)
        }
        if (value * c >= 2) {
          e++
          c /= 2
        }

        if (e + eBias >= eMax) {
          m = 0
          e = eMax
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen)
          e = e + eBias
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
          e = 0
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m
      eLen += mLen
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128
    }

  }, {}],
  7: [function (require, module, exports) {
    exports.endianness = function () {
      return 'LE'
    };

    exports.hostname = function () {
      if (typeof location !== 'undefined') {
        return location.hostname
      } else return '';
    };

    exports.loadavg = function () {
      return []
    };

    exports.uptime = function () {
      return 0
    };

    exports.freemem = function () {
      return Number.MAX_VALUE;
    };

    exports.totalmem = function () {
      return Number.MAX_VALUE;
    };

    exports.cpus = function () {
      return []
    };

    exports.type = function () {
      return 'Browser'
    };

    exports.release = function () {
      if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
      }
      return '';
    };

    exports.networkInterfaces = exports.getNetworkInterfaces = function () {
      return {}
    };

    exports.arch = function () {
      return 'javascript'
    };

    exports.platform = function () {
      return 'browser'
    };

    exports.tmpdir = exports.tmpDir = function () {
      return '/tmp';
    };

    exports.EOL = '\n';

  }, {}],
  "buffer": [function (require, module, exports) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */

    'use strict'

    var base64 = require('base64-js')
    var ieee754 = require('ieee754')

    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50

    var K_MAX_LENGTH = 0x7fffffff
    exports.kMaxLength = K_MAX_LENGTH

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Print warning and recommend using `buffer` v4.x which has an Object
     *               implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * We report that the browser does not support typed arrays if the are not subclassable
     * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
     * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
     * for __proto__ and has a buggy typed array implementation.
     */
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
      typeof console.error === 'function') {
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      )
    }

    function typedArraySupport() {
      // Can typed array instances can be augmented?
      try {
        var arr = new Uint8Array(1)
        arr.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42
          }
        }
        return arr.foo() === 42
      } catch (e) {
        return false
      }
    }

    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('Invalid typed array length')
      }
      // Return an augmented `Uint8Array` instance
      var buf = new Uint8Array(length)
      buf.__proto__ = Buffer.prototype
      return buf
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer(arg, encodingOrOffset, length) {
      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(arg)
      }
      return from(arg, encodingOrOffset, length)
    }

    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
      })
    }

    Buffer.poolSize = 8192 // not used by this implementation

    function from(value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (value instanceof ArrayBuffer) {
        return fromArrayBuffer(value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
      }

      return fromObject(value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length)
    }

    // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
    // https://github.com/feross/buffer/pull/148
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array

    function assertSize(size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc(size, fill, encoding) {
      assertSize(size)
      if (size <= 0) {
        return createBuffer(size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string' ?
          createBuffer(size).fill(fill, encoding) :
          createBuffer(size).fill(fill)
      }
      return createBuffer(size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(size, fill, encoding)
    }

    function allocUnsafe(size) {
      assertSize(size)
      return createBuffer(size < 0 ? 0 : checked(size) | 0)
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(size)
    }
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(size)
    }

    function fromString(string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0
      var buf = createBuffer(length)

      var actual = buf.write(string, encoding)

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual)
      }

      return buf
    }

    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0
      var buf = createBuffer(length)
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
      }
      return buf
    }

    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      var buf
      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array)
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset)
      } else {
        buf = new Uint8Array(array, byteOffset, length)
      }

      // Return an augmented `Uint8Array` instance
      buf.__proto__ = Buffer.prototype
      return buf
    }

    function fromObject(obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0
        var buf = createBuffer(len)

        if (buf.length === 0) {
          return buf
        }

        obj.copy(buf, 0, 0, len)
        return buf
      }

      if (obj) {
        if (ArrayBuffer.isView(obj) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(0)
          }
          return fromArrayLike(obj)
        }

        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked(length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
          'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer(length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
      }
      return Buffer.alloc(+length)
    }

    Buffer.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true
    }

    Buffer.compare = function compare(a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length
      var y = b.length

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i]
          y = b[i]
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    }

    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    }

    Buffer.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i
      if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
          length += list[i].length
        }
      }

      var buffer = Buffer.allocUnsafe(length)
      var pos = 0
      for (i = 0; i < list.length; ++i) {
        var buf = list[i]
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos)
        pos += buf.length
      }
      return buffer
    }

    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (ArrayBuffer.isView(string) || string instanceof ArrayBuffer) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string
      }

      var len = string.length
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    Buffer.byteLength = byteLength

    function slowToString(encoding, start, end) {
      var loweredCase = false

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0
      start >>>= 0

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8'

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase()
            loweredCase = true
        }
      }
    }

    // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
    // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
    // reliably in a browserify context because there could be multiple different
    // copies of the 'buffer' package in use. This method works even for Buffer
    // instances that were created from another copy of the `buffer` package.
    // See: https://github.com/feross/buffer/issues/154
    Buffer.prototype._isBuffer = true

    function swap(b, n, m) {
      var i = b[n]
      b[n] = b[m]
      b[m] = i
    }

    Buffer.prototype.swap16 = function swap16() {
      var len = this.length
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
      }
      return this
    }

    Buffer.prototype.swap32 = function swap32() {
      var len = this.length
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
      }
      return this
    }

    Buffer.prototype.swap64 = function swap64() {
      var len = this.length
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
      }
      return this
    }

    Buffer.prototype.toString = function toString() {
      var length = this.length
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    }

    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    }

    Buffer.prototype.inspect = function inspect() {
      var str = ''
      var max = exports.INSPECT_MAX_BYTES
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
        if (this.length > max) str += ' ... '
      }
      return '<Buffer ' + str + '>'
    }

    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0
      }
      if (end === undefined) {
        end = target ? target.length : 0
      }
      if (thisStart === undefined) {
        thisStart = 0
      }
      if (thisEnd === undefined) {
        thisEnd = this.length
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0
      end >>>= 0
      thisStart >>>= 0
      thisEnd >>>= 0

      if (this === target) return 0

      var x = thisEnd - thisStart
      var y = end - start
      var len = Math.min(x, y)

      var thisCopy = this.slice(thisStart, thisEnd)
      var targetCopy = target.slice(start, end)

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i]
          y = targetCopy[i]
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    }

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
      }
      byteOffset = +byteOffset // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1
      var arrLength = arr.length
      var valLength = val.length

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2
          arrLength /= 2
          valLength /= 2
          byteOffset /= 2
        }
      }

      function read(buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i
      if (dir) {
        var foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex
            foundIndex = -1
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
          var found = true
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    }

    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }

    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }

    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0
      var remaining = buf.length - offset
      if (!length) {
        length = remaining
      } else {
        length = Number(length)
        if (length > remaining) {
          length = remaining
        }
      }

      // must be an even number of digits
      var strLen = string.length
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16)
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed
      }
      return i
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write(string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
        // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
        // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset >>> 0
        if (isFinite(length)) {
          length = length >>> 0
          if (encoding === undefined) encoding = 'utf8'
        } else {
          encoding = length
          length = undefined
        }
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset
      if (length === undefined || length > remaining) length = remaining

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8'

      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }

    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    }

    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end)
      var res = []

      var i = start
      while (i < end) {
        var firstByte = buf[i]
        var codePoint = null
        var bytesPerSequence = (firstByte > 0xEF) ? 4 :
          (firstByte > 0xDF) ? 3 :
          (firstByte > 0xBF) ? 2 :
          1

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte
              }
              break
            case 2:
              secondByte = buf[i + 1]
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 3:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 4:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              fourthByte = buf[i + 3]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD
          bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000
          res.push(codePoint >>> 10 & 0x3FF | 0xD800)
          codePoint = 0xDC00 | codePoint & 0x3FF
        }

        res.push(codePoint)
        i += bytesPerSequence
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000

    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = ''
      var i = 0
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
      }
      return res
    }

    function asciiSlice(buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
      }
      return ret
    }

    function latin1Slice(buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
      }
      return ret
    }

    function hexSlice(buf, start, end) {
      var len = buf.length

      if (!start || start < 0) start = 0
      if (!end || end < 0 || end > len) end = len

      var out = ''
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i])
      }
      return out
    }

    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end)
      var res = ''
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
      }
      return res
    }

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length
      start = ~~start
      end = end === undefined ? len : ~~end

      if (start < 0) {
        start += len
        if (start < 0) start = 0
      } else if (start > len) {
        start = len
      }

      if (end < 0) {
        end += len
        if (end < 0) end = 0
      } else if (end > len) {
        end = len
      }

      if (end < start) end = start

      var newBuf = this.subarray(start, end)
      // Return an augmented `Uint8Array` instance
      newBuf.__proto__ = Buffer.prototype
      return newBuf
    }

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset(offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }

      return val
    }

    Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length)
      }

      var val = this[offset + --byteLength]
      var mul = 1
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul
      }

      return val
    }

    Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      return this[offset]
    }

    Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return this[offset] | (this[offset + 1] << 8)
    }

    Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return (this[offset] << 8) | this[offset + 1]
    }

    Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
    }

    Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
          (this[offset + 2] << 8) |
          this[offset + 3])
    }

    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
      mul *= 0x80

      if (val >= mul) val -= Math.pow(2, 8 * byteLength)

      return val
    }

    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var i = byteLength
      var mul = 1
      var val = this[offset + --i]
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
      }
      mul *= 0x80

      if (val >= mul) val -= Math.pow(2, 8 * byteLength)

      return val
    }

    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    }

    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset] | (this[offset + 1] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset + 1] | (this[offset] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    }

    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    }

    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, true, 23, 4)
    }

    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, false, 23, 4)
    }

    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, true, 52, 8)
    }

    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, false, 52, 8)
    }

    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }

      var mul = 1
      var i = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }

      var i = byteLength - 1
      var mul = 1
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
      this[offset] = (value & 0xff)
      return offset + 1
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }

    Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset + 3] = (value >>> 24)
      this[offset + 2] = (value >>> 16)
      this[offset + 1] = (value >>> 8)
      this[offset] = (value & 0xff)
      return offset + 4
    }

    Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }

    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }

      var i = 0
      var mul = 1
      var sub = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }

      var i = byteLength - 1
      var mul = 1
      var sub = 0
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
      if (value < 0) value = 0xff + value + 1
      this[offset] = (value & 0xff)
      return offset + 1
    }

    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }

    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }

    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      this[offset + 2] = (value >>> 16)
      this[offset + 3] = (value >>> 24)
      return offset + 4
    }

    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      if (value < 0) value = 0xffffffff + value + 1
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }

    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4)
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    }

    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8)
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    }

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0
      if (!end && end !== 0) end = this.length
      if (targetStart >= target.length) targetStart = target.length
      if (!targetStart) targetStart = 0
      if (end > 0 && end < start) end = start

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
      }

      var len = end - start
      var i

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start]
        }
      } else if (len < 1000) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start]
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        )
      }

      return len
    }

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start
          start = 0
          end = this.length
        } else if (typeof end === 'string') {
          encoding = end
          end = this.length
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0)
          if (code < 256) {
            val = code
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0
      end = end === undefined ? this.length : end >>> 0

      if (!val) val = 0

      var i
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val
        }
      } else {
        var bytes = Buffer.isBuffer(val) ?
          val :
          new Buffer(val, encoding)
        var len = bytes.length
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len]
        }
      }

      return this
    }

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

    function base64clean(str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '')
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '='
      }
      return str
    }

    function stringtrim(str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex(n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity
      var codePoint
      var length = string.length
      var leadSurrogate = null
      var bytes = []

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            }

            // valid lead
            leadSurrogate = codePoint

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }

        leadSurrogate = null

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint)
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes(str) {
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
      }
      return byteArray
    }

    function utf16leToBytes(str, units) {
      var c, hi, lo
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
      }

      return byteArray
    }

    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str))
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
      }
      return i
    }

    function isnan(val) {
      return val !== val // eslint-disable-line no-self-compare
    }

  }, {
    "base64-js": 5,
    "ieee754": 6
  }],
  "dns-packet": [function (require, module, exports) {
    var types = require('./types')
    var ip = require('ip')
    var Buffer = require('safe-buffer').Buffer

    var QUERY_FLAG = 0
    var RESPONSE_FLAG = 1 << 15
    var FLUSH_MASK = 1 << 15
    var NOT_FLUSH_MASK = ~FLUSH_MASK
    var QU_MASK = 1 << 15
    var NOT_QU_MASK = ~QU_MASK

    var name = {}

    name.encode = function (n, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(name.encodingLength(n))
      if (!offset) offset = 0

      var list = n.split('.')
      var oldOffset = offset

      for (var i = 0; i < list.length; i++) {
        var len = buf.write(list[i], offset + 1)
        buf[offset] = len
        offset += len + 1
      }

      buf[offset++] = 0

      name.encode.bytes = offset - oldOffset
      return buf
    }

    name.encode.bytes = 0

    name.decode = function (buf, offset) {
      if (!offset) offset = 0

      var list = []
      var oldOffset = offset
      var len = buf[offset++]

      if (len >= 0xc0) {
        var res = name.decode(buf, buf.readUInt16BE(offset - 1) - 0xc000)
        name.decode.bytes = 2
        return res
      }

      while (len) {
        if (len >= 0xc0) {
          list.push(name.decode(buf, buf.readUInt16BE(offset - 1) - 0xc000))
          offset++
          break
        }

        list.push(buf.toString('utf-8', offset, offset + len))
        offset += len
        len = buf[offset++]
      }

      name.decode.bytes = offset - oldOffset
      return list.join('.')
    }

    name.decode.bytes = 0

    name.encodingLength = function (n) {
      return Buffer.byteLength(n) + 2
    }

    var string = {}

    string.encode = function (s, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(string.encodingLength(s))
      if (!offset) offset = 0

      var len = buf.write(s, offset + 1)
      buf[offset] = len
      string.encode.bytes = len + 1
      return buf
    }

    string.encode.bytes = 0

    string.decode = function (buf, offset) {
      if (!offset) offset = 0

      var len = buf[offset]
      var s = buf.toString('utf-8', offset + 1, offset + 1 + len)
      string.decode.bytes = len + 1
      return s
    }

    string.decode.bytes = 0

    string.encodingLength = function (s) {
      return Buffer.byteLength(s) + 1
    }

    var header = {}

    header.encode = function (h, buf, offset) {
      if (!buf) buf = header.encodingLength(h)
      if (!offset) offset = 0

      var flags = (h.flags || 0) & 32767
      var type = h.type === 'response' ? RESPONSE_FLAG : QUERY_FLAG

      buf.writeUInt16BE(h.id || 0, offset)
      buf.writeUInt16BE(flags | type, offset + 2)
      buf.writeUInt16BE(h.questions.length, offset + 4)
      buf.writeUInt16BE(h.answers.length, offset + 6)
      buf.writeUInt16BE(h.authorities.length, offset + 8)
      buf.writeUInt16BE(h.additionals.length, offset + 10)

      return buf
    }

    header.encode.bytes = 12

    header.decode = function (buf, offset) {
      if (!offset) offset = 0
      if (buf.length < 12) throw new Error('Header must be 12 bytes')
      var flags = buf.readUInt16BE(offset + 2)

      return {
        id: buf.readUInt16BE(offset),
        type: flags & RESPONSE_FLAG ? 'response' : 'query',
        flags: flags & 32767,
        questions: new Array(buf.readUInt16BE(offset + 4)),
        answers: new Array(buf.readUInt16BE(offset + 6)),
        authorities: new Array(buf.readUInt16BE(offset + 8)),
        additionals: new Array(buf.readUInt16BE(offset + 10))
      }
    }

    header.decode.bytes = 12

    header.encodingLength = function (h) {
      return 12
    }

    var runknown = exports.unknown = {}

    runknown.encode = function (data, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(runknown.encodingLength(data))
      if (!offset) offset = 0

      buf.writeUInt16BE(data.length, offset)
      data.copy(buf, offset + 2)

      runknown.encode.bytes = data.length + 2
      return buf
    }

    runknown.encode.bytes = 0

    runknown.decode = function (buf, offset) {
      if (!offset) offset = 0

      var len = buf.readUInt16BE(offset)
      var data = buf.slice(offset + 2, offset + 2 + len)
      runknown.decode.bytes = len + 2
      return data
    }

    runknown.decode.bytes = 0

    runknown.encodingLength = function (data) {
      return data.length + 2
    }

    var rtxt = exports.txt = exports.null = {}
    var rnull = rtxt

    rtxt.encode = function (data, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(rtxt.encodingLength(data))
      if (!offset) offset = 0

      if (typeof data === 'string') data = Buffer.from(data)
      if (!data) data = Buffer.allocUnsafe(0)

      var oldOffset = offset
      offset += 2

      var len = data.length
      data.copy(buf, offset, 0, len)
      offset += len

      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset)
      rtxt.encode.bytes = offset - oldOffset
      return buf
    }

    rtxt.encode.bytes = 0

    rtxt.decode = function (buf, offset) {
      if (!offset) offset = 0
      var oldOffset = offset
      var len = buf.readUInt16BE(offset)

      offset += 2

      var data = buf.slice(offset, offset + len)
      offset += len

      rtxt.decode.bytes = offset - oldOffset
      return data
    }

    rtxt.decode.bytes = 0

    rtxt.encodingLength = function (data) {
      if (!data) return 2
      return (Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data)) + 2
    }

    var rhinfo = exports.hinfo = {}

    rhinfo.encode = function (data, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(rhinfo.encodingLength(data))
      if (!offset) offset = 0

      var oldOffset = offset
      offset += 2
      string.encode(data.cpu, buf, offset)
      offset += string.encode.bytes
      string.encode(data.os, buf, offset)
      offset += string.encode.bytes
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset)
      rhinfo.encode.bytes = offset - oldOffset
      return buf
    }

    rhinfo.encode.bytes = 0

    rhinfo.decode = function (buf, offset) {
      if (!offset) offset = 0

      var oldOffset = offset

      var data = {}
      offset += 2
      data.cpu = string.decode(buf, offset)
      offset += string.decode.bytes
      data.os = string.decode(buf, offset)
      offset += string.decode.bytes
      rhinfo.decode.bytes = offset - oldOffset
      return data
    }

    rhinfo.decode.bytes = 0

    rhinfo.encodingLength = function (data) {
      return string.encodingLength(data.cpu) + string.encodingLength(data.os) + 2
    }

    var rptr = exports.ptr = {}
    var rcname = exports.cname = rptr
    var rdname = exports.dname = rptr

    rptr.encode = function (data, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(rptr.encodingLength(data))
      if (!offset) offset = 0

      name.encode(data, buf, offset + 2)
      buf.writeUInt16BE(name.encode.bytes, offset)
      rptr.encode.bytes = name.encode.bytes + 2
      return buf
    }

    rptr.encode.bytes = 0

    rptr.decode = function (buf, offset) {
      if (!offset) offset = 0

      var data = name.decode(buf, offset + 2)
      rptr.decode.bytes = name.decode.bytes + 2
      return data
    }

    rptr.decode.bytes = 0

    rptr.encodingLength = function (data) {
      return name.encodingLength(data) + 2
    }

    var rsrv = exports.srv = {}

    rsrv.encode = function (data, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(rsrv.encodingLength(data))
      if (!offset) offset = 0

      buf.writeUInt16BE(data.priority || 0, offset + 2)
      buf.writeUInt16BE(data.weight || 0, offset + 4)
      buf.writeUInt16BE(data.port || 0, offset + 6)
      name.encode(data.target, buf, offset + 8)

      var len = name.encode.bytes + 6
      buf.writeUInt16BE(len, offset)

      rsrv.encode.bytes = len + 2
      return buf
    }

    rsrv.encode.bytes = 0

    rsrv.decode = function (buf, offset) {
      if (!offset) offset = 0

      var len = buf.readUInt16BE(offset)

      var data = {}
      data.priority = buf.readUInt16BE(offset + 2)
      data.weight = buf.readUInt16BE(offset + 4)
      data.port = buf.readUInt16BE(offset + 6)
      data.target = name.decode(buf, offset + 8)

      rsrv.decode.bytes = len + 2
      return data
    }

    rsrv.decode.bytes = 0

    rsrv.encodingLength = function (data) {
      return 8 + name.encodingLength(data.target)
    }

    var ra = exports.a = {}

    ra.encode = function (host, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(ra.encodingLength(host))
      if (!offset) offset = 0

      buf.writeUInt16BE(4, offset)
      offset += 2
      ip.toBuffer(host, buf, offset)
      ra.encode.bytes = 6
      return buf
    }

    ra.encode.bytes = 0

    ra.decode = function (buf, offset) {
      if (!offset) offset = 0

      offset += 2
      var host = ip.toString(buf, offset, 4)
      ra.decode.bytes = 6
      return host
    }

    ra.decode.bytes = 0

    ra.encodingLength = function (host) {
      return 6
    }

    var raaaa = exports.aaaa = {}

    raaaa.encode = function (host, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(raaaa.encodingLength(host))
      if (!offset) offset = 0

      buf.writeUInt16BE(16, offset)
      offset += 2
      ip.toBuffer(host, buf, offset)
      raaaa.encode.bytes = 18
      return buf
    }

    raaaa.encode.bytes = 0

    raaaa.decode = function (buf, offset) {
      if (!offset) offset = 0

      offset += 2
      var host = ip.toString(buf, offset, 16)
      raaaa.decode.bytes = 18
      return host
    }

    raaaa.decode.bytes = 0

    raaaa.encodingLength = function (host) {
      return 18
    }

    var renc = exports.record = function (type) {
      switch (type.toUpperCase()) {
        case 'A':
          return ra
        case 'PTR':
          return rptr
        case 'CNAME':
          return rcname
        case 'DNAME':
          return rdname
        case 'TXT':
          return rtxt
        case 'NULL':
          return rnull
        case 'AAAA':
          return raaaa
        case 'SRV':
          return rsrv
        case 'HINFO':
          return rhinfo
      }
      return runknown
    }

    var answer = exports.answer = {}

    answer.encode = function (a, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(answer.encodingLength(a))
      if (!offset) offset = 0

      var oldOffset = offset

      name.encode(a.name, buf, offset)
      offset += name.encode.bytes

      buf.writeUInt16BE(types.toType(a.type), offset)

      var klass = a.class === undefined ? 1 : a.class
      if (a.flush) klass |= FLUSH_MASK // the 1st bit of the class is the flush bit
      buf.writeUInt16BE(klass, offset + 2)

      buf.writeUInt32BE(a.ttl || 0, offset + 4)

      var enc = renc(a.type)
      enc.encode(a.data, buf, offset + 8)
      offset += 8 + enc.encode.bytes

      answer.encode.bytes = offset - oldOffset
      return buf
    }

    answer.encode.bytes = 0

    answer.decode = function (buf, offset) {
      if (!offset) offset = 0

      var a = {}
      var oldOffset = offset

      a.name = name.decode(buf, offset)
      offset += name.decode.bytes
      a.type = types.toString(buf.readUInt16BE(offset))
      a.class = buf.readUInt16BE(offset + 2)
      a.ttl = buf.readUInt32BE(offset + 4)

      a.flush = !!(a.class & FLUSH_MASK)
      if (a.flush) a.class &= NOT_FLUSH_MASK

      var enc = renc(a.type)
      a.data = enc.decode(buf, offset + 8)
      offset += 8 + enc.decode.bytes

      answer.decode.bytes = offset - oldOffset
      return a
    }

    answer.decode.bytes = 0

    answer.encodingLength = function (a) {
      return name.encodingLength(a.name) + 8 + renc(a.type).encodingLength(a.data)
    }

    var question = exports.question = {}

    question.encode = function (q, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(question.encodingLength(q))
      if (!offset) offset = 0

      var oldOffset = offset

      name.encode(q.name, buf, offset)
      offset += name.encode.bytes

      buf.writeUInt16BE(types.toType(q.type), offset)
      offset += 2

      buf.writeUInt16BE(q.class === undefined ? 1 : q.class, offset)
      offset += 2

      question.encode.bytes = offset - oldOffset
      return q
    }

    question.encode.bytes = 0

    question.decode = function (buf, offset) {
      if (!offset) offset = 0

      var oldOffset = offset
      var q = {}

      q.name = name.decode(buf, offset)
      offset += name.decode.bytes

      q.type = types.toString(buf.readUInt16BE(offset))
      offset += 2

      q.class = buf.readUInt16BE(offset)
      offset += 2

      var qu = !!(q.class & QU_MASK)
      if (qu) q.class &= NOT_QU_MASK

      question.decode.bytes = offset - oldOffset
      return q
    }

    question.decode.bytes = 0

    question.encodingLength = function (q) {
      return name.encodingLength(q.name) + 4
    }

    exports.AUTHORITATIVE_ANSWER = 1 << 10
    exports.TRUNCATED_RESPONSE = 1 << 9
    exports.RECURSION_DESIRED = 1 << 8
    exports.RECURSION_AVAILABLE = 1 << 7
    exports.AUTHENTIC_DATA = 1 << 5
    exports.CHECKING_DISABLED = 1 << 4

    exports.encode = function (result, buf, offset) {
      if (!buf) buf = Buffer.allocUnsafe(exports.encodingLength(result))
      if (!offset) offset = 0

      var oldOffset = offset

      if (!result.questions) result.questions = []
      if (!result.answers) result.answers = []
      if (!result.authorities) result.authorities = []
      if (!result.additionals) result.additionals = []

      header.encode(result, buf, offset)
      offset += header.encode.bytes

      offset = encodeList(result.questions, question, buf, offset)
      offset = encodeList(result.answers, answer, buf, offset)
      offset = encodeList(result.authorities, answer, buf, offset)
      offset = encodeList(result.additionals, answer, buf, offset)

      exports.encode.bytes = offset - oldOffset

      return buf
    }

    exports.encode.bytes = 0

    exports.decode = function (buf, offset) {
      if (!offset) offset = 0

      var oldOffset = offset
      var result = header.decode(buf, offset)
      offset += header.decode.bytes

      offset = decodeList(result.questions, question, buf, offset)
      offset = decodeList(result.answers, answer, buf, offset)
      offset = decodeList(result.authorities, answer, buf, offset)
      offset = decodeList(result.additionals, answer, buf, offset)

      exports.decode.bytes = offset - oldOffset

      return result
    }

    exports.decode.bytes = 0

    exports.encodingLength = function (result) {
      return header.encodingLength(result) +
        encodingLengthList(result.questions || [], question) +
        encodingLengthList(result.answers || [], answer) +
        encodingLengthList(result.authorities || [], answer) +
        encodingLengthList(result.additionals || [], answer)
    }

    function encodingLengthList(list, enc) {
      var len = 0
      for (var i = 0; i < list.length; i++) len += enc.encodingLength(list[i])
      return len
    }

    function encodeList(list, enc, buf, offset) {
      for (var i = 0; i < list.length; i++) {
        enc.encode(list[i], buf, offset)
        offset += enc.encode.bytes
      }
      return offset
    }

    function decodeList(list, enc, buf, offset) {
      for (var i = 0; i < list.length; i++) {
        list[i] = enc.decode(buf, offset)
        offset += enc.decode.bytes
      }
      return offset
    }

  }, {
    "./types": 2,
    "ip": 3,
    "safe-buffer": 4
  }],
  "dns-txt": [function (require, module, exports) {
    (function (Buffer) {
      'use strict'

      var bindexOf = require('buffer-indexof')

      var equalSign = new Buffer('=')

      module.exports = function (opts) {
        var binary = opts ? opts.binary : false
        var that = {}

        that.encode = function (data, buf, offset) {
          if (!data) data = {}
          if (!offset) offset = 0
          if (!buf) buf = new Buffer(that.encodingLength(data) + offset)

          var oldOffset = offset
          var keys = Object.keys(data)

          if (keys.length === 0) {
            buf[offset] = 0
            offset++
          }

          keys.forEach(function (key) {
            var val = data[key]
            var oldOffset = offset
            offset++

            if (val === true) {
              offset += buf.write(key, offset)
            } else if (Buffer.isBuffer(val)) {
              offset += buf.write(key + '=', offset)
              var len = val.length
              val.copy(buf, offset, 0, len)
              offset += len
            } else {
              offset += buf.write(key + '=' + val, offset)
            }

            buf[oldOffset] = offset - oldOffset - 1
          })

          that.encode.bytes = offset - oldOffset
          return buf
        }

        that.decode = function (buf, offset, len) {
          if (!offset) offset = 0
          if (!Number.isFinite(len)) len = buf.length
          var data = {}
          var oldOffset = offset

          while (offset < len) {
            var b = decodeBlock(buf, offset)
            var i = bindexOf(b, equalSign)
            offset += decodeBlock.bytes

            if (b.length === 0) continue // ignore: most likely a single zero byte
            if (i === -1) data[b.toString().toLowerCase()] = true
            else if (i === 0) continue // ignore: invalid key-length
            else {
              var key = b.slice(0, i).toString().toLowerCase()
              if (key in data) continue // ignore: overwriting not allowed
              data[key] = binary ? b.slice(i + 1) : b.slice(i + 1).toString()
            }
          }

          that.decode.bytes = offset - oldOffset
          return data
        }

        that.encodingLength = function (data) {
          if (!data) return 1 // 1 byte (single empty byte)
          var keys = Object.keys(data)
          if (keys.length === 0) return 1 // 1 byte (single empty byte)
          return keys.reduce(function (total, key) {
            var val = data[key]
            total += Buffer.byteLength(key) + 1 // +1 byte to store field length
            if (Buffer.isBuffer(val)) total += val.length + 1 // +1 byte to fit equal sign
            else if (val !== true) total += Buffer.byteLength(String(val)) + 1 // +1 byte to fit equal sign
            return total
          }, 0)
        }

        return that
      }

      function decodeBlock(buf, offset) {
        var len = buf[offset]
        var to = offset + 1 + len
        var b = buf.slice(offset + 1, to > buf.length ? buf.length : to)
        decodeBlock.bytes = len + 1
        return b
      }

    }).call(this, require("buffer").Buffer)
  }, {
    "buffer": "buffer",
    "buffer-indexof": 1
  }]
}, {}, []);

/**
 * Zeroconf lib
 */

var packet = require('dns-packet');
var socket = chrome.sockets.udp;
var dnsTxt = require('dns-txt')();
var Buffer = require('buffer').Buffer;

var TLD = '.local';
var WILDCARD = '_services._dns-sd._udp' + TLD;

/**
 * Service
 */
var Service = function () {
  this.name = '';
  this.type = '';
  this.fqdn = '';
  this.host = '';
  this.port = '';
  this.ipv4 = [];
  this.ipv6 = [];
  this.txt = '';
};

/**
 * Contruction from an array
 * @param {array} answers
 * @param {object} opt
 */

Service.prototype.serialize = function (answers, opt, callback) {
  var self = this;
  if (!opt.host) callback('Required hostname not given');
  if (!opt.ipv4) callback('ipv4 not given');
  if (!opt.ipv6) callback('ipv6 not given');
  this.host = opt.host;
  this.ipv4 = opt.ipv4.slice(0);
  this.ipv6 = opt.ipv6.slice(0);
  answers.forEach(function (ans) {
    switch (ans.type) {
      case 'PTR':
        self.fqdn = ans.data;
        self.name = ans.data.split('.', 1)[0];
        self.type = ans.name.slice(0, -6);
        break;

      case 'TXT':
        self.txt = dnsTxt.decode(ans.data);
        break;

      case 'SRV':
        self.port = ans.data.port;
        break;
    }
  });
  return self;
};

/**
 * Browser
 */

var Browser = function (err) {
  this.callback_ = err;
  this.ServiceType = WILDCARD;
  this.found;
  this.TypeMap = [];
  this.socketInfo;
  this.bind = true;

  // Set up receive handlers.
  this.onReceiveListener_ = this.onReceive_.bind(this);
  socket.onReceive.addListener(this.onReceiveListener_);
  this.onReceiveErrorListener_ = this.onReceiveError_.bind(this);
  socket.onReceiveError.addListener(this.onReceiveErrorListener_);

  Browser.bindToAddress_(function (socket) {
    if (!socket) {
      this.callback_('could not bind UDP socket');
      this.bind = false;
    }
  });

};

Browser.prototype.find = function (callback, type) {
  var self = this;
  self.callback_ = callback;
  self.found = false;
  if (type.length != 0) this.ServiceType = type + TLD;

  if (this.bind) {
    this.broadcast_();

    // After a short time, if our database is empty, report an error.
    setTimeout(function () {
      if (!self.found) {
        self.callback_('no mDNS services found!', null);
      }
    }, 10 * 1000);
  }
}

Browser.bindToAddress_ = function (callback) {
  socket.create({}, function (createInfo) {
    socketInfo = createInfo;
    socket.bind(createInfo['socketId'], '0.0.0.0', 0,
      function (result) {
        callback((result >= 0) ? createInfo['socketId'] : null);
      });
  });
};

Browser.prototype.broadcast_ = function () {
  var self = this;
  var buf = packet.encode({
    type: 'query',
    id: 0,
    flags: 0 << 8,
    questions: [{
      type: 'PTR',
      name: self.ServiceType
    }]
  }).buffer;

  socket.send(socketInfo.socketId, buf, '224.0.0.251', 5353, function (sendInfo) {
    if (sendInfo.resultCode < 0)
      this.callback_('Could not send data to:' + "mDNS", null);
  });
};

Browser.prototype.onReceive_ = function (info) {
  var query = packet.decode(new Buffer(info.data));
  var ans = (query.answers).concat(query.additionals);
  var self = this;
  self.found = true;
  var boo = ans[0].name == WILDCARD;

  if (boo) {
    self.TypeMap.length = 0;
    var q = [];
    ans.forEach(function (answer) {
      if (self.TypeMap.indexOf(answer.data) != -1) {
        return;
      } else {
        self.TypeMap.push(answer.data);
        q.push({
          type: '*',
          name: answer.data
        });
      }
    });

    var buff = packet.encode({
      type: 'query',
      id: 0,
      flags: 0 << 8,
      questions: q
    }).buffer;

    socket.send(socketInfo.socketId, buff, '224.0.0.251', 5353, function (sendInfo) {
      //
    });

  } else {
    var i = 0;
    var opt = {
      host: '',
      ipv4: [],
      ipv6: []
    };
    var j = 0;

    while (j < ans.length) {
      switch (ans[j].type) {
        case 'AAAA':
          opt.host = ans[j].name;
          opt.ipv6.push(ans[j].data);
          ans.splice(j, 1);
          j--;
          break;
        case 'A':
          opt.host = ans[j].name;
          opt.ipv4.push(ans[j].data);
          ans.splice(j, 1);
          j--;
          break;

      }
      j++;
    };

    while (i < ans.length) {
      var rec = ans.slice(i, i + 3);
      var S = new Service();
      S.serialize(rec, opt, function (err) {
        if (err) console.log("err" + err)
      });
      self.callback_(null, S);
      i += 3;
    };


  }
};

Browser.prototype.onReceiveError_ = function (info) {
  this.callback_(info.resultCode, null);
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