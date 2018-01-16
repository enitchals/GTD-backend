const task = require ('../controllers/taskControllers.js');
const user = require ('../controllers/userControllers.js');
const project = require ('../controllers/projectControllers.js');
const note = require ('../controllers/noteControllers.js');
const event = require ('../controllers/eventControllers.js');

const middleware = require('../middlewares/middleware.js');

        //.put(note.editNote)
        //.put(user.editUser)
        //.delete(user.deleteUser);
        //.put(task.editTask)
        //.put(project.editProject)
        //.put(event.editEvent)

module.exports = (app) => {
    app.route('/user').post(middleware.hash, user.addUser)
    app.route('/user/login').post(middleware.authenticate, user.login)
    //
    app.route('/task')
        .post(task.addTask)
    app.route('/tasks/:id')
        .get(task.getTasks);
    app.route('/task/:id')
        .get(task.getTask)
        .delete(task.deleteTask);
    //
    app.route('/project')
        .post(project.addProject);
    app.route('/projects/:id')
        .get(project.getProjects);
    app.route('/project/:id')
        .get(project.getProject)
        .delete(project.deleteProject);
    //
    app.route('/note')
        .post(note.addNote)
    app.route('/notes/:id')
        .get(note.getNotes);
    app.route('/note/:id')
        .get(note.getNote)
        .delete(note.deleteNote);
    //
    app.route('/event')
        .post(event.addEvent)
    app.route('/events/:id')
        .get(event.getEvents);
    app.route('/event/:id')
        .get(event.getEvent)
        .delete(event.deleteEvent);
};