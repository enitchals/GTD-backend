const mongoose = require('mongoose');
const Task = require('../models/taskModels.js');

const ERROR = 422;

// CREATE A NEW TASK OBJECT IN THE MONGO DB
const addTask = (req, res) => {
    const { user, task, memo, project, status } = req.body;
    const newTask = new Task({ user, task, memo, project, status });
    console.log(newTask);
    newTask
        .save()
        .then(task => res.json(task))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};

// GET ALL THE TASKS ASSOCIATED WITH A GIVEN USER ID
const getTasks = (req, res) => {
    const { id } = req.params;
    Task
        .find({
            user: id
        })
        .then(tasks => {
            console.log("TASKS SENT:", tasks);
            res.json(tasks);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET ALL THE TASKS ASSOCIATED WITH A GIVEN PROJECT ID
const getTasksByProject = (req, res) => {
    const { id } = req.params;
    Task
        .find({
            project: id
        })
        .then(tasks => {
            console.log("TASKS SENT:", tasks);
            res.json(tasks);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET ALL THE NEXT ACTIONS ASSOCIATED WITH A GIVEN USER ID
const getNextActions = (req, res) => {
    const { id } = req.params;
    Task
        .find({
            user: id,
            status: "nextActions"
        })
        .populate('project')
        .exec()
        .then(tasks => {
            console.log("NEXT ACTIONS SENT:", tasks);
            res.json(tasks);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET A SPECIFIC TASKS'S DETAILS BY ID
// THIS CAN PROBABLY BE DEPRECATED...
// I DON'T THINK IT'S NEEDED ANYMORE
const getTask = (req, res) => {
    const { id } = req.params;
    Task.findById(id)
        //.populate('project', 'project')
        //.exec()
        .then(task => {
            console.log("TASK SENT:", task);
            res.json(task);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}


// DELETE A TASK -- THIS NEEDS AUTH MIDDLEWARE 
// OR SOME KIND OF TOKEN AUTH FOR PROTECTION
const deleteTask = (req, res) => {
    const {id} = req.params;
    Task.findByIdAndRemove(id, (err, task) => {
        console.log("DELETING TASK:", task);
        res.status(200).json(id);
        return;
    });
}

module.exports = {
    addTask,
    deleteTask,
    getTask,
    getNextActions,
    getTasksByProject,
    getTasks,
};
