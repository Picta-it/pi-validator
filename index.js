var pwd       = process.env.PWD,
    path      = require('path'),
    Validator = require(path.join(pwd, 'app/validator'));

module.exports = Validator;
