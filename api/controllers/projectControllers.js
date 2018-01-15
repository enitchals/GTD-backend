const mongoose = require('mongoose');
const Project = require('../models/projectModels.js');

const ERROR = 422;

const addProject = (req, res) => {
    const { metadata, project, description, tasks, notes, due } = req.body;
    const newProject = new Project({ metadata, project, description, tasks, notes, due });
    console.log(newProject);
    newProject
        .save()
        .then(project => res.json(project))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};

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
};