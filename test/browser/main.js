window.addEventListener('load', function () {
    var results = document.getElementById('results');
    var input = document.getElementById("ServiceType");
    var browseBtn = document.getElementById('browse');
    var finder = new Browser(function (err) {
        if (err) {
            console.warn(err)
        }
    })

    input.onkeydown = function (ev) {
        if (ev.which == 13) {
            browse();
        }
    }

    var getType = function (key) {
        if (key in serviceTypes) {
            return " - " + serviceTypes[key];
        } else {
            return '';
        }
    };

    var callback_ = function (ret_err, result) {
        results.classList.remove('working');

        if (ret_err) {
            var s = document.createElement('strong');
            s.classList.add('warning');
            s.innerText = ret_err;
            results.appendChild(s);
        }

        if (result) {
            var li = document.createElement('li');
            li.innerHTML = result.name;
            results.appendChild(li);

            var ul = document.createElement('ul');
            ul.innerHTML = "ServiceType: " + result.type + getType(result.type) + "</br>" +
                "Hostname: " + result.host + "</br>" +
                "Port: " + result.port + "</br>" +
                "IPv4: " + result.ipv4 + "</br>" +
                "IPv6: " + result.ipv6 + "</br>" +
                "TXT: " + JSON.stringify(result.txt, '', 4);
            results.appendChild(ul);
        }
    }

    var browse = function () {
        results.innerHTML = '';
        results.classList.add('working');
        finder.find(callback_, input.value);
    };

    browseBtn.addEventListener('click', browse);


});