const bcrypt = require('bcrypt');
const User = require('../models/userModels.js');
const TaskMetadata = require('../models/taskMetadataModels.js');
const NoteMetadata = require('../models/noteMetadataModels.js');
const ProjectMetadata = require('../models/projectMetadataModels.js');
const EventMetadata = require('../models/eventMetadataModels.js');
const BCRYPT_COST = 11;

hash = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        throw new Error();
        return;
    }
    bcrypt
        .hash(password, BCRYPT_COST)
        .then((hash) => {
            req.password = hash;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
};

authenticate = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        throw new Error();
        return;
    }
    User.findOne({ email }, (err, user) => {
        if (err || user === null) {
            throw new Error();
            return;
        }
        const hash = user.password;
        bcrypt
            .compare(password, hash)
            .then((res) => {
                if(!res) throw new Error();
                req.loggedInUser = user;
                next();
            })
            .catch((err) => {
                throw new Error();
                return;
            });
    });
}

taskMetadata = (req, res, next) => {
    const { user, project, reminders, tags } = req.body.metadata;
    const metadata = new TaskMetadata({ user, project, reminders, tags });
    console.log(metadata);    
    metadata
        .save()
        .then((metadata) => {
            req.body.metadata = `${metadata._id}`;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
}

noteMetadata = (req, res, next) => {
    const { user, task, project, reminders, tags } = req.body.metadata;
    const metadata = new NoteMetadata({ user, task, project, reminders, tags });
    console.log(metadata);
    metadata
        .save()
        .then((metadata) => {
            req.body.metadata = `${metadata._id}`;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
}

projectMetadata = (req, res, next) => {
    const { user, tags } = req.body.metadata;
    const metadata = new ProjectMetadata({ user, tags });
    console.log(metadata);
    metadata
        .save()
        .then((metadata) => {
            req.body.metadata = `${metadata._id}`;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
}

eventMetadata = (req, res, next) => {
    const { user, project, reminders, tags } = req.body.metadata;
    const metadata = new EventMetadata({ user, project, reminders, tags });
    console.log(metadata);
    metadata
        .save()
        .then((metadata) => {
            req.body.metadata = `${metadata._id}`;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
}

module.exports = {
    hash,
    authenticate,
    taskMetadata,
    noteMetadata,
    projectMetadata,
    eventMetadata,
};