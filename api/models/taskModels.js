// A task is a to-do item. It can be free-standing or associated with a project, and 

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    task: {
        type: String,
        required: true,
    },
    memo: String,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    status: {
        type: String,
        enum: ['nextActions', 'someday']
    },
});

module.exports = mongoose.model('Task', TaskSchema);