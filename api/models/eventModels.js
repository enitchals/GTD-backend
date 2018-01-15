const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    metadata: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventMetadata',
        required: true,
    },
    event: {
        type: String,
        required: true,
    },
    memo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
    },
});

module.exports = mongoose.model('Event', EventSchema);