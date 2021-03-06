const bcrypt = require('bcrypt');
const User = require('../models/userModels.js');
const Task = require('../models/taskModels.js');
const Note = require('../models/noteModels.js');
const Event = require('../models/eventModels.js');
const Project = require('../models/projectModels.js');
const BCRYPT_COST = 11;

// HASHES PASSWORDS
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

// CONVERTS EMAILS TO LOWERCASE
lowercase = (req, res, next) => {
    const lowercase = req.body.email.toLowerCase();
    req.email = lowercase;
    next();
}

//AUTHENTICATION MIDDLEWARE FOR USER LOGIN
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

// SEND USER'S TASK DATA DURING LOGIN PROCESS
taskData = (req, res, next) => {
    const id = req.loggedInUser._id;
    console.log(id);
    
    Task
    .find({
        user: id
    })
    .then(tasks => {
        console.log("TASKS SENT:", tasks);
        req.tasks = tasks;
        next();
    })
    .catch(err => {
        res.status("error").json(err);
        return;
    });
}

// SEND USER'S NOTE DATA DURING LOGIN PROCESS
noteData = (req, res, next) => {
    const id = req.loggedInUser._id;
    console.log(id);
    Note
    .find({
        user: id
    })
    .then(notes => {
        console.log("NOTES SENT:", notes);
        req.notes = notes;
        next();
    })
    .catch(err => {
        res.status("error").json(err);
        return;
    });
}

// SEND USER'S EVENT DATA DURING LOGIN PROCESS
eventData = (req, res, next) => {
    const id = req.loggedInUser._id;
    console.log(id);
    Event
    .find({
        user: id
    })
    .then(events => {
        console.log("EVENTS SENT:", events);
        req.events = events;
        next();
    })
    .catch(err => {
        res.status("error").json(err);
        return;
    });
}

// SEND USER'S PROJECT DATA DURING LOGIN PROCESS
projectData = (req, res, next) => {
    const id = req.loggedInUser._id;
    console.log(id); 
    Project
    .find({
        user: id
    })
    .then(projects => {
        console.log("PROJECTS SENT:", projects);
        req.projects = projects;
        next();
    })
    .catch(err => {
        res.status("error").json(err);
        return;
    });
}


module.exports = {
    taskData,
    noteData,
    projectData,
    eventData,
    hash,
    authenticate,
};