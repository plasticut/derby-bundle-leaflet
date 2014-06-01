var derby = require('derby');
derby.on('store', function(store) {
    store.on('bundle', function(browserify) {
        browserify.add(__dirname + '/bower_components/leaflet/dist/leaflet.js');
    });
});

module.exports = function(app, options) {
    if (app.loadStatic) {
        app.loadStatic(__dirname + '/bower_components/leaflet/dist/');
    }
};
