module.exports.index = index
module.exports.login = login
module.exports.loginProcess = loginProcess
module.exports.chat = chat

function index(req, res) {
    res.cookie('Index Cookies', 'This is Set from Index.JS from Back-End!');
    res.render('index', {
        title: 'index', 
        cookie: JSON.stringify(req.cookies)
    });
}

function login(req, res) {
    res.render('login', { title: 'login', body: 'body' });
}

function loginProcess(req, res) {
    res.redirect('/');
}

function chat(req, res) {
    res.render('chat', { title: 'chat', body: 'chat' });
}