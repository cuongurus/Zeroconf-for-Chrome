# Zeroconf-for-Chrome
A Zeroconf implementation in JavaScript for Chrome Apps. Publish services on the local network or discover existing services using multicast DNS. </br>
Due to Chrome Socket UDP API doesn't has option reuse address, this implementation use Unicast DNS for discovering services, and Publish function have to wait for new API.
# Installation
You can install by git clone this repo and copy javascript file "zeroconf.js" in folder "src" to your app folder:
```
git clone https://github.com/cuongurus/Zeroconf-for-Chrome.git
```
This lib required these permissions:
```json
"sockets": {
     "udp": { "bind": "*", "send": "*" }
  }
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
// Initializing
var finder = new Browser( function(err){
  if(err) console.warn(err);

// Browse for all _http._tcp services  
finder.find (function(err, result){
  if(err) console.warn(err)
  if(result) console.log('Found service: ' + JSON.stringify(result, null, 4))
},'_http._tcp')
```
# APIs
## Browser
### Initializing
```js
var finder = new Browser(error)
```
Creat a **Browser** object. The **error** event is emitted whenever any error occurs.
### finder.find(callback, service_type)

Browser for all services with given service_type

| Type | Property | Description |
| --- | --- | --- |
| Function | callback | called when a service has been found.</br>The *callback* parameter should be a function that looks like this:</br>function (string error, Service result){...};</br><table><tr><td>String</td><td>error</td><td>The error return from browsing</td></tr><tr><td>Service Object</td><td>result</td><td>The service return from browsing</td></tr></table> |
| String | service_type | Example: '_http._tcp'. List of known service_types [here](https://github.com/cuongurus/Zeroconf-for-Chrome/blob/master/test/service-types.js)</br>Let it null for browse all. |

## Service
Service look like this
```
{
name: string,
type: string,
fqdn: string,
host: string,
port: string,
ipv4: [],
ipv6: [],
txt: object
}
```
## Publish
On development.
# Test screenshot
![test](https://raw.githubusercontent.com/cuongurus/Zeroconf-for-Chrome/master/images/screenshot.png)


