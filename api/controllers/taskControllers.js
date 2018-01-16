const mongoose = require('mongoose');
const Task = require('../models/taskModels.js');

const ERROR = 422;

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

const getTasks = (req, res) => {
    const { id } = req.params;
    Task
        .find({
            user: id
        })
        .then(tasks => {
            res.json(tasks);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

const getTask = (req, res) => {
    const { id } = req.params;
    Task.findById(id)
        .then(task => {
            res.json(task);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// const editTask = (req, res) => {}

//deleteTask needs authentication middleware
const deleteTask = (req, res) => {
    const {id} = req.params;
    Task.findByIdAndRemove(id, (err, task) => {
        res.status(200).json('removed the task');
        return;
    });
}

module.exports = {
    addTask,
    //editTask,
    deleteTask,
    getTask,
    getTasks,
};
