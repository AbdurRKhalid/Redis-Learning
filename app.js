var express = require('express');
var app = express()
var routes = require('./routes');
var errorHandlers = require('./middlewares/errorhandlers');
var log = require('./middlewares/log');
var partials = require('express-partials');


// Routers Implementations,
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/proces-login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function(req, res, next) {
    next(new Error('A Custom Generated Error!'))
});

// Middleware implementations.
app.use(partials())
app.set('view options', {defaultLayout: 'layout'});
app.set('view engine', 'ejs');
app.use(errorHandlers.notFound);
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(errorHandlers.error);



app.listen(3000);

console.log('app server running on Port 3000!');
