module.exports = function(app, options) {
    var derby = require('derby');
    derby.util.serverRequire(module, './bundle-leaflet');
    app.loadStyles(__dirname + '/bower_components/leaflet/dist/leaflet.css');
};