// A task is a to-do item. It can be free-standing or associated with a project, and 

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    metadata: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskMetadata',
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    memo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
    },
    status: {
        type: String,
        enum: ['nextActions', 'someday']
    },
});

module.exports = mongoose.model('Task', TaskSchema);