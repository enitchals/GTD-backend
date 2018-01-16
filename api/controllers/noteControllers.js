const mongoose = require('mongoose');
const Note = require('../models/noteModels.js');

const ERROR = 422;

const addNote = (req, res) => {
    const { user, project, note } = req.body;
    const newNote = new Note({ user, project, note });
    console.log(newNote);
    newNote
        .save()
        .then(note => res.json(note))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};

const getNotes = (req, res) => {
    const { id } = req.params;
    Note
        .find({
            user: id
        })
        .then(notes => {
            res.json(notes);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

const getNote = (req, res) => {
    const { id } = req.params;
    Note.findById(id)
        .then(note => {
            res.json(note);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// const editNote = (req, res) => {}

const deleteNote = (req, res) => {
    const {id} = req.params;
    Note.findByIdAndRemove(id, (err, note) => {
        res.status(200).json('removed the note');
        return;
    });
}

module.exports = {
    addNote,
    //editNote,
    deleteNote,
    getNote,
    getNotes,
};
