var express = require('express');
var app = express()
var routes = require('./routes');
var errorHandlers = require('./middlewares/errorhandlers');
var log = require('./middlewares/log');


app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/proces-login', routes.loginProcess);
app.get('/chat', routes.chat);
app.use(errorHandlers.notFound);
app.use(log.logger);
app.use(express.static(__dirname + '/static'));

app.listen(3000);

console.log('app server running on Port 3000!');
