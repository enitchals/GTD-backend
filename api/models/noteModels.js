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
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true,
    },
    tags: [String],
});

module.exports = mongoose.model('Note', NoteSchema);