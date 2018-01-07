// A Project is a way of collecting related tasks and notes in one place.

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);