// A Project is a way of collecting related tasks and notes in one place.

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: String,
        required: true,
    },
    memo: {
        type: String,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);