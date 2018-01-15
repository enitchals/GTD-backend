const mongoose = require('mongoose');

const NoteMetadataSchema = new mongoose.Schema({
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

module.exports = mongoose.model('NoteMetadata', NoteMetadataSchema);