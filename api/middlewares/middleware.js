const bcrypt = require('bcrypt');
const User = require('../models/userModels.js');
const requireSignIn = require('../services/passport').requireSignIn;
const getTokenForUser = require('../services/token');
const BCRYPT_COST = 11;

hash = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        throw new Error();
        return;
    }
    bcrypt
        .hash(password, BCRYPT_COST)
        .then((hash) => {
            req.password = hash;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
};

signIn = (req, res) => {
    res.sent({
        token: getTokenForUser(req.user),
        user: req.user,
    });
};

authenticate = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        throw new Error();
        return;
    }
    User.findOne({ email }, (err, user) => {
        if (err || user === null) {
            throw new Error();
            return;
        }
        const hash = user.password;
        bcrypt
            .compare(password, hash)
            .then((res) => {
                if(!res) throw new Error();
                req.loggedInUser = user;
                next();
            })
            .catch((err) => {
                throw new Error();
                return;
            });
    });
};


module.exports = {
    hash,
    authenticate,
    signIn,
};