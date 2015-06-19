var settings = require('./settings.json');
var express = require('express');
var swig = require('swig');
var path = require('path');
var router = require('../routes/routes.js');
var server = express();

function configure(server) {
	var viewsPath = path.resolve(__dirname, '../views');
	var publicPath = path.resolve(__dirname, '../public');
	server.use(express.static(publicPath));
	// This is where all the magic happens!
	server.engine('html', swig.renderFile);

	server.set('view engine', 'html');
	server.set('views', viewsPath);

	// Swig will cache templates for you, but you can disable
	// that and use Express's caching instead, if you like:
	server.set('view cache', false);
	// To disable Swig's cache, do the following:
	swig.setDefaults({ cache: false });
	// NOTE: You should always cache templates in a production environment.
	// Don't leave both of these to `false` in production!
	server.use(errHandler);
	//路由配置
	server.use('/', router);
}

function errHandler(err, req, res, next) {
	switch (err.name) {
		case 'SyntaxError':
			res.status(err.status).json({"message" : "syntax error"});
			break;
		default:
			res.status(500).json({"message" : "server go mad"});

	}
}

function run(port) {
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

module.exports = run;