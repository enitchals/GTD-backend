const mongoose = require('mongoose');

const TaskMetadataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    created: {
        type: Date,
        default: Date.now,
    },
    reminders: [Date],
    tags: [String],
});

const NoteMetadataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    created: {
        type: Date,
        default: Date.now,
    },
    reminders: [Date],
    tags: [String],
});

const ProjectMetadataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    created: {
        type: Date,
        default: Date.now,
    },
    tags: [String],
})

module.exports = {
    mongoose.model('TaskMetadata', TaskMetadataSchema),
    mongoose.model('NoteMetadata', NoteMetadataSchema),    
    mongoose.model('ProjectMetadata', ProjectMetadataSchema),
};