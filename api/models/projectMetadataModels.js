const mongoose = require('mongoose');

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

module.exports = mongoose.model('ProjectMetadata', ProjectMetadataSchema);