var settings = require('./settings.json');
var express = require('express');
var router = require('../routes/routes.js');
var server = express();

function configure(server) {
	server.use(express.static(__dirname + '/public'));
	//路由配置
	server.use('/', router);
}

function start(port) {
	//server初始化
	configure(server);

	if (port && typeof port == 'number') {
		server.listen(port);
		console.log('Server started in port: ' + port);
	} else {
		server.listen(settings.port);
		console.log('Server started in port: ' + settings.port);
	}
}

module.exports = start;