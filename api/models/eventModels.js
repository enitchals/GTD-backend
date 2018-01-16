const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    event: {
        type: String,
        required: true,
    },
    memo: String,
});

module.exports = mongoose.model('Event', EventSchema);