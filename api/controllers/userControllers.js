const mongoose = require('mongoose');

const User = require('../models/userModels');

const ERROR = 422;

const addUser = (req, res) => {
};

const login = (req, res) => {
};

// const editUser = (req, res) => {}

const deleteUser = (req, res) => {
    const {id} = req.params;
    User.findByIdAndRemove(id, (err, user) => {
        res.status(200).json('removed the user');
        return;
    });
}

module.exports = {
    addUser,
    login,
    editUser,
    deleteUser,
};