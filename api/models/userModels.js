const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    tasks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }
});

module.exports = mongoose.model('User', UserSchema);