// A task is a to-do item. It can be free-standing or associated with a project, and 

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    memo: {
        type: String,
    },
    status: {
        type: String,
        enum: ['someday', 'nextActions', 'waiting', 'scheduled']
    },
    dueDate: {
        type: Date,
    },
    doDate: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    tags: [String],
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
});

module.exports = mongoose.model('Task', TaskSchema);