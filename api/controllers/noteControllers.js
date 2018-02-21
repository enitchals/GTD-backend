const mongoose = require('mongoose');
const Note = require('../models/noteModels.js');

const ERROR = 422;

// ADD A NEW NOTE OBJECT IN THE MONGO DB
const addNote = (req, res) => {
    const { user, project, title, note, tags } = req.body;
    const newNote = new Note({ user, project, title, note, tags });
    console.log(newNote);
    newNote
        .save()
        .then(note => res.json(note))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        })
};

/*
const editNote = (req, res) => {
    const { user, project, title, note, tags, id } = req.body;
    Note
        .findByIdAndUpdate(req.body)
        .then()

}
*/

// GET ALL THE NOTES FOR A GIVEN USER ID
const getNotes = (req, res) => {
    const { id } = req.params;
    Note
        .find({
            user: id
        })
        .then(notes => {
            console.log("NOTES SENT:", notes);            
            res.json(notes);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET NOTES ASSOCIATED WITH A GIVEN PROJECT ID
const getNotesByProject = (req, res) => {
    const { id } = req.params;
    Note
        .find({
            project: id
        })
        .then(notes => {
            console.log("NOTES SENT:", notes);
            res.json(notes);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET DETAILS FOR A SPECIFIC NOTE
// CAN PROBABLY BE DEPRECATED
// -- NOT SURE I NEED THIS ANYMORE
const getNote = (req, res) => {
    const { id } = req.params;
    Note.findById(id)
        //.populate('project', 'project')
        //.exec()
        .then(note => {
            console.log("NOTE SENT:", note);
            res.json(note);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// DELETE A NOTE -- THIS NEEDS AUTH TOKEN/MIDDLEWARE
const deleteNote = (req, res) => {
    const {id} = req.params;
    Note.findByIdAndRemove(id, (err, note) => {
        res.status(200).json('removed the note');
        return;
    });
}

module.exports = {
    addNote,
    deleteNote,
    getNote,
    getNotesByProject,
    getNotes,
};
