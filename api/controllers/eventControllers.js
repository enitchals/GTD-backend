const mongoose = require('mongoose');
const Event = require('../models/eventModels.js');

const ERROR = 422;

// ADD A NEW EVENT OBJECT TO THE MONGO DB
const addEvent = (req, res) => {
    const { user, project, event, memo, date, time } = req.body;
    const newEvent = new Event({ user, project, event, memo, date, time });
    console.log(newEvent);
    newEvent
        .save()
        .then(event => res.json(event))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};

// GET EVENTS ASSOCIATED WITH A GIVEN USER ID
const getEvents = (req, res) => {
    const { id } = req.params;
    Event
        .find({
            user: id
        })
        .then(events => {
            console.log("EVENTS SENT:", events);            
            res.json(events);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET EVENTS ASSOCIATED WITH A SPECIFIC PROJECT ID
const getEventsByProject = (req, res) => {
    const { id } = req.params;
    Event
        .find({
            project: id
        })
        .then(events => {
            console.log("EVENTS SENT:", events);
            res.json(events);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// GET DETAILS FOR A SPECIFIC EVENT --
// CAN PROBABLY BE DEPRECATED/DELETED
const getEvent = (req, res) => {
    const { id } = req.params;
    Event.findById(id)
        //.populate('project', 'project')
        //.exec()
        .then(event => {
            console.log("EVENT SENT:", event);
            res.json(event);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// DELETE EVENT -- NEEDS AUTH TOKEN/MIDDLEWARE
const deleteEvent = (req, res) => {
    const {id} = req.params;
    Event.findByIdAndRemove(id, (err, event) => {
        res.status(200).json('removed the event');
        return;
    });
}

module.exports = {
    addEvent,
    deleteEvent,
    getEvent,
    getEventsByProject,
    getEvents,
};
