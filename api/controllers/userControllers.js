const mongoose = require('mongoose');
const User = require('../models/userModels');
const requireAuth = require('../services/passport').requireAuth;
const getTokenForUser = require('../services/token.js');

const ERROR = 422;

const addUser = (req, res) => {
    const password = req.password;
    const { name, email } = req.body;
    const newUser = new User({ name, email, password });
    console.log('new user:', newUser.email);
    newUser
        .save()
        .then(user => {
            res.json(user);
            res.send({ token: getTokenForUser(user)});
        })
        .catch(err => res.status(422).json(err));
};

const login = (req, res) => {
    res.json(req.loggedInUser)
    res.send({
        token: getTokenForUser(req.user),
        user: req.user,
    });
};

// const editUser = (req, res) => {}

const deleteUser = (req, res) => {
    const {id} = req.params;
    User.findByIdAndRemove(id, (err, user) => {
        res.status(200).json('removed user:', user.username);
        return;
    });
}

module.exports = {
    addUser,
    login,
    //editUser,
    deleteUser,
};