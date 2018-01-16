const mongoose = require('mongoose');
const Event = require('../models/eventModels.js');

const ERROR = 422;

const addEvent = (req, res) => {
    const { user, project, event, memo } = req.body;
    const newEvent = new Event({ user, project, event, memo });
    console.log(newEvent);
    newEvent
        .save()
        .then(event => res.json(event))
        .catch((err) => {
            res.status(ERROR).json(err);
            return;
        });
};


const getEvents = (req, res) => {
    const { id } = req.params;
    Event
        .find({
            user: id
        })
        .then(events => {
            res.json(events);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

const getEvent = (req, res) => {
    const { id } = req.params;
    Event.findById(id)
        .then(event => {
            res.json(event);
            return;
        })
        .catch(err => {
            res.status(ERROR).json(err);
            return;
        });
}

// const editEvent = (req, res) => {}

const deleteEvent = (req, res) => {
    const {id} = req.params;
    Event.findByIdAndRemove(id, (err, event) => {
        res.status(200).json('removed the event');
        return;
    });
}

module.exports = {
    addEvent,
    //editEvent,
    deleteEvent,
    getEvent,
    getEvents,
};
