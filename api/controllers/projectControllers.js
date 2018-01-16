const mongoose = require('mongoose');
const Project = require('../models/projectModels.js');

const ERROR = 422;

const addProject = (req, res) => {
    const { user, project, memo, tasks, notes, events } = req.body;
    const newProject = new Project({ user, project, memo, tasks, notes, events });
    console.log(newProject);
    newProject
        .save()
        .then(project => res.json(project))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};
const getProjects = (req, res) => {
    const { id } = req.params;
    Project
        .find({
            user: id
        })
        .then(projects => {
            res.json(projects);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

const getProject = (req, res) => {
    const { id } = req.params;
    Project.findById(id)
        .then(project => {
            res.json(project);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// const editProject = (req, res) => {}

const deleteProject = (req, res) => {
    const {id} = req.params;
    Project.findByIdAndRemove(id, (err, project) => {
        res.status(200).json('removed the project');
        return;
    });
}

module.exports = {
    addProject,
    //editProject,
    deleteProject,
    getProject,
    getProjects,
};