## Notes to Self:
reference:
https://hamberg.no/gtd/

link to backend repo:
https://github.com/enitchals/GTD-backend

# Endpoints that need to be written:
PUT /user: Edit user account.
PUT /task: Edit a task.
PUT /project: Edit a project.
PUT /note: Edit a note.
PUT /event: Edit an event.

# Emdpoints in progress:
DELETE /user: Delete user account (needs middleware)
POST /user/login: Login to user account

# API:

# =======USERS=======

## POST /user
Create a new user. (TESTED AND WORKING)
Accepts: name, email, password

# =======TASKS=======

## POST /task
Create a task. (TESTED AND WORKING)
Accepts: metadata(user, project, reminders, tags), task, status

## GET /tasks/:id
Get a user's tasks by their user ID (TESTED AND WORKING)

## GET /task/:id
Get the details for a specific task by the task ID (TESTED AND WORKING)

## DELETE /task/:id
Delete a task. (TESTED AND WORKING)

# =======PROJECTS=======

## POST /project
Create a project. (TESTED AND WORKING)
Accepts: metadata(user, tags), project, description, tasks, notes, due

## GET /projects/:id
Get a user's projects by their user ID (TESTED AND WORKING)

## GET /project/:id
Get the details for a specific project by the project ID (TESTED AND WORKING)

# DELETE /project/:id
Delete a project. (TESTED AND WORKING)

# =======NOTES=======

## POST /note
Create a note. (TESTED AND WORKING)
Accepts: metadata(user, task, project, reminders, tags), note

## GET /notes/:id
Get a user's notes by their user ID (TESTED AND WORKING)

## GET /note/:id
Get the details for a specific note by the note ID (TESTED AND WORKING)

## DELETE /note/:id
Delete a note. (TESTED AND WORKING)

# =======EVENTS=======

## POST /event
Create an event. (TESTED AND WORKING)
Accepts: metadata(user, project, reminders, tags), event, memo

## GET /events/:id
Get a user's events by their user ID (TESTED AND WORKING)

## GET /event/:id
Get the details for a specific event by event ID (TESTED AND WORKING)

## DELETE /event/:id
Delete an event. (TESTED AND WORKING)