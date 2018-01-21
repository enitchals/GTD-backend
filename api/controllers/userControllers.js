const mongoose = require('mongoose');
const User = require('../models/userModels.js');
const Task = require('../models/taskModels.js');
const Note = require('../models/noteModels.js');
const Event = require('../models/eventModels.js');
const Project = require('../models/projectModels.js');


const ERROR = 422;

const addUser = (req, res) => {
    const password = req.password;
    const { name, email } = req.body;
    const newUser = new User({ name, email, password });
    newUser
        .save()
        .then(user => {
            console.log("NEW USER:", user);
            res.json(user);
            //res.send({ token: getTokenForUser(user)});
        })
        .catch(err => res.status(422).json(err));
};

const login = (req, res) => {
    res.json({user: req.loggedInUser, tasks: req.tasks, notes: req.notes, events: req.events, projects: req.projects})
    return;
    //res.send({
        //token: getTokenForUser(req.user),
        //user: req.user,
    //});
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