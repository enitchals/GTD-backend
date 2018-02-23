const mongoose = require('mongoose');
const User = require('../models/userModels.js');
const Task = require('../models/taskModels.js');
const Note = require('../models/noteModels.js');
const Event = require('../models/eventModels.js');
const Project = require('../models/projectModels.js');
const ERROR = 422;

// CREATE A NEW USER -- HASH PASSWORD AND CREATE MONGO USER OBJECT
const addUser = (req, res, next) => {
    const password = req.password;
    const { name, email } = req.body;
    const newUser = new User({ name, email, password });
    newUser
        .save()
        .then(user => {
            console.log("NEW USER:", user);
            res.json(user);
            next();
        })
        .catch(err => res.status(422).json(err));
};

// AFTER THE USER'S PASSWORD HAS BEEN VERIFIED
// SEND BACK AN OBJECT WITH ALL THE USER DATA
const login = (req, res) => {
    res.json({
        user: req.loggedInUser,
        tasks: req.tasks,
        notes: req.notes,
        events: req.events,
        projects: req.projects
    })
    return;
};

// FIRST TIME LOGIN
const newUserLogin = (req, res) => {
    res.json({
        user: res.json.user,
        tasks: [],
        notes: [],
        events: [],
        projects: []
    })
    return;
};

// DELETE THE USER'S ACCOUNT -- NOTHING IMPLEMENTED
// ON THE FRONT END FOR THIS YET. NEEDS PW PROTECTION
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
    deleteUser,
};