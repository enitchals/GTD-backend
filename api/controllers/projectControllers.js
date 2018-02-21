const mongoose = require('mongoose');
const Project = require('../models/projectModels.js');

const ERROR = 422;

// CREATE A NEW PROJECT OBJECT IN MONGO DB
const addProject = (req, res) => {
    const { user, project, memo } = req.body;
    const newProject = new Project({ user, project, memo });
    console.log(newProject);
    newProject
        .save()
        .then(project => res.json(project))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};

// GET ALL THE PROJECTS FOR A GIVEN USER ID
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

// GET DETAILS FOR A PROJECT ID
// I THINK THIS CAN BE DEPRECATED --
// NOT SURE WHY I'D NEED IT ANYMORE
const getProject = (req, res) => {
    const { id } = req.params;
    Project.findById(id)
        .then(project => {
            console.log("PROJECT SENT:", project);
            res.json(project);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// DELETE A PROJECT -- NEEDS MIDDLEWARE AUTH
// OR TOKEN AUTH TO PROTECT USER DATA
const deleteProject = (req, res) => {
    const {id} = req.params;
    Project.findByIdAndRemove(id, (err, project) => {
        res.status(200).json('removed the project');
        return;
    });
}

module.exports = {
    addProject,
    deleteProject,
    getProject,
    getProjects,
};