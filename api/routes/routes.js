const task = require ('../controllers/taskControllers.js');
const user = require ('../controllers/userControllers.js');
const project = require ('../controllers/projectControllers.js');
const note = require ('../controllers/noteControllers.js');

// const middleware = require('../middlewares/middleware')

module.exports = (app) => {
    app.route('/user')
        .post(user.addUser)
        .put(user.editUser)
        .delete(user.deleteUser);
    app.route('/task')
        .post(task.addTask)
        .put(task.editTask)
        .delete(task.deleteTask);
    app.route('/project')
        .post(project.addProject)
        .put(project.editProject)
        .delete(project.deleteProject);
    app.route('/note')
        .post(note.addNote)
        .put(note.editNote)
        .delete(note.deleteNote);
};