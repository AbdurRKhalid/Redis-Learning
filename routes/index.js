module.exports.index = index
module.exports.login = login
module.exports.loginProcess = loginProcess
module.exports.chat = chat

function index(req, res) {
    res.render('index', {title: 'index'})
}

function login(req, res) {
    res.render('login', {title: 'login', body: 'body'});
}

function loginProcess(req, res) {
    res.redirect('/');
}

function chat(req, res) {
    res.render('chat', {title: 'chat', body: 'chat'});
}