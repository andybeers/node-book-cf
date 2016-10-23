var server = require('./server');
var router = require('./router');
var requestHanlders = require('./requestHandlers');

var handle = {};
handle['/'] = requestHanlders.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route);