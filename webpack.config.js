'use strict';

var _ = require('lodash');
var _configs = {

    //global section
    global: require(__dirname + '/config/server/global'),

    // config by environments
    production: require(__dirname + '/config/server/env/production'),
    development: require(__dirname + '/config/server/env/development')
};

var _load = function() {
    var ENV = process.env.NODE_ENV
        ? process.env.NODE_ENV
        : 'production';

    return _configs && _.merge(
        _configs.global(__dirname),
        _configs[ENV](__dirname)
    );
};

module.exports = _load();