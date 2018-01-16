const jwt = require('jwt-simple');
const config = require('./config.js');

module.exports = (user) => {
    return jwt.encode({
        sub: user.id,
        iat: new Date().getTime(),
    }, config.secret);
};