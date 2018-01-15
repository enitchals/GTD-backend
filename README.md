## Notes to Self:
reference:
https://hamberg.no/gtd/

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

## POST /user
Create a new user. (TESTED AND WORKING)
Accepts: name, email, password

## POST /task
Create a task. (TESTED AND WORKING)
Accepts: metadata(user, project, reminders, tags), task, status

## DELETE /task/:id
Delete a task. (TESTED AND WORKING)

## POST /project
Create a project. (TESTED AND WORKING)
Accepts: metadata(user, tags), project, description, tasks, notes, due

# DELETE /project/:id
Delete a project. (TESTED AND WORKING)

## /note

## POST /note
Create a note. (TESTED AND WORKING)
Accepts: metadata(user, task, project, reminders, tags), note

## DELETE /note/:id
Delete a note. (TESTED AND WORKING)

## POST /event
Create an event. (TESTED AND WORKING)
Accepts: metadata(user, project, reminders, tags), event, memo

## DELETE /event/:id
Delete an event. (TESTED AND WORKING)