derby-bundle-leaflet
====================
Adds leaflet.js and leaflet.css to application bundle

Application
```javascript
app.serverUse(module, require('derby-static'));
app.use(require('derby-bundle-leaflet'));
```
Server:
```javascript
...
expressApp.use(app.static(options));
...
```
or
```javascript
var server = require('derby-starter');
var app = require('./app');
server.run(app, { 'static': app.getStaticRoutes() });
```

Bower and derby-static is requried.