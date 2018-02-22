const task = require ('../controllers/taskControllers.js');
const user = require ('../controllers/userControllers.js');
const project = require ('../controllers/projectControllers.js');
const note = require ('../controllers/noteControllers.js');
const event = require ('../controllers/eventControllers.js');
const middleware = require('../middlewares/middleware.js');


module.exports = (app) => {
//
// ROUTES FOR CREATING ACCOUNT, LOGGING IN, ETC
//
    app.route('/user').post(middleware.hash, middleware.lowercase, user.addUser)
    app.route('/login').post(middleware.lowercase, middleware.authenticate, middleware.taskData, middleware.noteData, middleware.eventData, middleware.projectData, user.login)
//
// ROUTES FOR TASK-RELATED DATA
// (NOT ALL OF THESE ARE ACTUALLY IN USE...)
//
    app.route('/task')
        .post(task.addTask);
    app.route('/tasks/:id')
        .get(task.getTasks);
    app.route('/task/:id')
        .get(task.getTask);
    app.route('/task/:id')        
        .delete(task.deleteTask);
    app.route('/project/tasks/:id')
        .get(task.getTasksByProject);
    app.route('/nextActions/:id')
        .get(task.getNextActions);
//
// ROUTES FOR PROJECT-RELATED DATA
// (NOT ALL OF THESE ARE ACTUALLY IN USE...)
//
    app.route('/project')
        .post(project.addProject);
    app.route('/projects/:id')
        .get(project.getProjects);
    app.route('/project/:id')
        .get(project.getProject);
    app.route('/project/:id')        
        .delete(project.deleteProject);
//
// ROUTES FOR NOTE-RELATED DATA
// (NOT ALL OF THESE ARE ACTUALLY IN USE...)
//
    app.route('/note')
        .post(note.addNote);
    app.route('/notes/:id')
        .get(note.getNotes);
    app.route('/note/:id')
        .get(note.getNote);
    app.route('/note/:id')        
        .delete(note.deleteNote);
    app.route('/project/notes/:id')
        .get(note.getNotesByProject);
//
// ROUTES FOR EVENT-RELATED DATA
// (NOT ALL OF THESE ARE ACTUALLY IN USE...)
//
    app.route('/event')
        .post(event.addEvent);
    app.route('/events/:id')
        .get(event.getEvents);
    app.route('/event/:id')
        .get(event.getEvent);
    app.route('/event/:id')        
        .delete(event.deleteEvent);
    app.route('/project/events/:id')
        .get(event.getEventsByProject);
};