var fs, path, Plugin;

fs = require('fs');
path = require('path');

Plugin = function(options) {
    this.options = options || {};
    this.options.path = options.path || '';
    this.options.filename = options.filename || 'timestamp.json';
};

Plugin.prototype.apply = function(compiler) {
    var _this, output;

    _this = this;
    output = path.join(_this.options.path, _this.options.filename);

    compiler.plugin('emit', function(compiler, callback) {
        _this.createDateObj(compiler, output);
        callback();
    });
};

Plugin.prototype.createDateObj = function(compiler, outputFull) {

    var timestamp,
        dateObj,
        json;

    timestamp = Date.now();

    dateObj = {
        timestamp: timestamp
    }

    json = JSON.stringify(dateObj);

    fs.writeFile(outputFull, json, function(err) {
        if (err) {
            compiler.errors.push(new Error('Timestamp Webpack Plugin: Unable to save to ' + outputFull));
        }
    });
};

module.exports = Plugin;
