// PROJECTS ARE USED TO TIE TASKS, NOTES, AND EVENTS
// TOGETHER INTO A COMMON GOAL OR THEME.
// NO LONGER STORING TASKS/NOTES/EVENTS IN ARRAYS ON THESE.

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
    /*
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
    */
});

module.exports = mongoose.model('Project', ProjectSchema);