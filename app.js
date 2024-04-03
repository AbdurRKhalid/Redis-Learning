var express = require('express');
var app = express()
var routes = require('./routes');


app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/proces-login', routes.loginProcess);
app.get('/chat', routes.chat);

app.listen(3000);

console.log('app server running on Port 3000!');
