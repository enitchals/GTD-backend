// Notes can be associated with a project (or not), and they can have a reminder associated with them (or not).

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    note: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Note', NoteSchema);