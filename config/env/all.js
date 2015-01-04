'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');
var fs = require('fs');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: process.env.MONGOHQ_URL
};
/*
var models_path = __dirname + '/../../app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);
*/