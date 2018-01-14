const mongoose = require('mongoose');

const Note = require('../models/noteModels.js');

const ERROR = 422;

const addNote = (req, res) => {
    const { metadata, note } = req.body;
    const newNote = new Note({ metadata, note });
    newNote
        .save()
        .then(note => {
            res.json(note);
        })
        .catch(err) => {
            res.status(ERROR).json(err);
            return;
        });
};

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
};
