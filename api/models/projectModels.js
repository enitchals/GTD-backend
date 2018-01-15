// A Project is a way of collecting related tasks and notes in one place.

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    metadata: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProjectMetadata',
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    description: {
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
    due: Date,
});

module.exports = mongoose.model('Project', ProjectSchema);