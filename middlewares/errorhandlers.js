exports.notFound = function notFound(req, res, next) {
    res.send(404, 'You seemed to be Lost! The page you are looking for Cannot be found!');
};

exports.error = function error(req, res, next) {
    res.send(500, 'Something is Broken, Try Again Later!');
};