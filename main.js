var startServer = require('./server/server.js');

if (process.argv.length >= 3)
{
	startServer(parseInt(process.argv[2]));
} else {
	startServer();
}