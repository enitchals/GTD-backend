// Notes can be associated with a project (or not), and they can have a reminder associated with them (or not).

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reminder: {
        type: Date,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    tags: {
        type: String,
    }
});

module.exports = mongoose.model('Note', NoteSchema);