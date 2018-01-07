const mongoose = require('mongoose');

const Task = require('../models/taskModels.js');

const ERROR = 422;

const addTask = (req, res) => {
    const { task, user, memo, status, dueDate, doDate, tags, project } = req.body;
    const newTask = new Task({ task, user, memo, status, dueDate, doDate, tags, project });
    newTask
        .save()
        .then(task => {
            res.json(task);
        })
        .catch(err) => {
            res.status(ERROR).json(err);
            return;
        });
};

// const editTask = (req, res) => {}

const deleteTask = (req, res) => {
    const {id} = req.params;
    Task.findByIdAndRemove(id, (err, task) => {
        res.status(200).json('removed the task');
        return;
    });
}

module.exports = {
    addTask,
    editTask,
    deleteTask,
};