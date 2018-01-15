const task = require ('../controllers/taskControllers.js');
const user = require ('../controllers/userControllers.js');
const project = require ('../controllers/projectControllers.js');
const note = require ('../controllers/noteControllers.js');
const event = require ('../controllers/eventControllers.js');

const middleware = require('../middlewares/middleware.js');

module.exports = (app) => {
    app.route('/user')
        .post(middleware.hash, user.addUser)
        //.put(user.editUser)
        //.delete(user.deleteUser);
    app.route('/user/login')
        .post(middleware.authenticate, user.login)
    app.route('/task')
        .post(middleware.taskMetadata, task.addTask);
        //.put(task.editTask)
    app.route('/task/:id')
        .delete(task.deleteTask);
    app.route('/project')
        .post(middleware.projectMetadata, project.addProject);
        //.put(project.editProject)
    app.route('/project/:id')
        .delete(project.deleteProject);
    app.route('/note')
        .post(middleware.noteMetadata, note.addNote);
        //.put(note.editNote)
    app.route('/note/:id')
        .delete(note.deleteNote);
    app.route('/event')
        .post(middleware.eventMetadata, event.addEvent);
        //.put(event.editEvent)
    app.route('/event/:id')
        .delete(event.deleteEvent);
};