module.exports = function(app, options) {
    var derby = require('derby');
    app.loadStyles(__dirname + '/bower_components/leaflet/dist/leaflet.css');
    var bundle = derby.util.serverRequire(module, './bundle-leaflet');
    if (bundle) {
        bundle(app, options);
    }
};