# Zeroconf-for-Chrome
A Zeroconf implementation in JavaScript for Chrome Apps. Publish services on the local network or discover existing services using multicast DNS.
# Installation
You can install by git clone this repo and copy javascript file "zeroconf.js" in folder "src" to your app folder:
```
git clone https://github.com/cuongurus/Zeroconf-for-Chrome.git
```
This lib required these permissions:
```json
"sockets": {
     "udp": { "bind": "*", "send": "*" }
  },
"permissions": [ "system.network" ]
  ```

You can also install with [chominit](https://www.npmjs.com/package/chrominit) tool by cd to your app folder and run:
```
chominit -z
```
This tool will automatically download "zeroconf.js" file to your app folder and add required permissions.</br>
**Import to your window page using script tag for complete install:**
```html
<script src="zeroconf.js"></script>.
```

# Usage
```js
// browse for all _http._tcp services
var finder = new Browser( function(err){
  console.log(err);
  
  var out = finder.services;
  out.forEach(function(o){
  console.log('Found service: ' + JSON.stringify(o))
  })
}, '_http._tcp')
```
# APIs
## Browser
### `var finder = new Browser( callback, service_tyoe)`
Browser for all services with given service_type

| Type | Property | Description |
| --- | --- | --- |
| Function | callback | called when services has been found.</br>The *callback* parameter should be a function that looks like this:</br>function (err){</br>//do something with err(error when browse)</br>var out = finder.services;</br>out.forEach(function(o){</br>//do something with service</br>}); |
| String | service_type | Example: '_http._tcp'. List of known service_types [here](https://github.com/cuongurus/Zeroconf-for-Chrome/blob/master/test/service-types.js)</br>Let it null for browse all. |

### `finder && finder.shutdown()`
Stop discover for matching services.
## Service
Service look like this
```
{
name: string,
type: string,
host: string,
port: string,
ipv4: string,
ipv6: string,
txt: object
}
```
## Publish
On development.
# Test screenshot
![test](https://raw.githubusercontent.com/cuongurus/Zeroconf-for-Chrome/master/images/screenshot.png)


