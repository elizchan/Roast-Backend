# Roast
## Front-end Repo Link
https://github.com/SFX818/Team-8-frontend
## Link to Deployed API
https://roastbackend.herokuapp.com/
## Technology
    * Node js
    * Express
    * MongoDB
    * Mongoose
## General Approach
    * Construct models and their schemas required for application function.
    * Develop RESTful routes that allow for appropriate controller functions to be utilized.
    * Write controller functions that allow for proper manipulation of database models.
## Installation Instructions
    * Fork and clone repo
    * npm -i
## Routes

|ROUTE |CRUD  |URL           |DESCRIPTION                          |
|------|------|--------------|-------------------------------------|
|POST  |Create|“/api/cafe” |Add searched cafe to cafe model.     |
|GET   |Read  |"/api/cafe/favorite/:id”|Match a user's favorite cafe to a stored cafe.|
|POST   |Create  |“/api/comments|Create a new comment.      |
|GET  |Read|“/api/comments/:id”|Show all comments related to a specific cafe.     |
|PUT  |Update|“/api/comments/:id”|User can edit a specific comment.|
|DELETE   |Delete|“/api/comments/:id”|User can delete a specific comment.          |
|PUT|Update|“/api/user/favorites”|Add a favorite cafe to user model.         |
|GET|Read|“/api/user/favorites/:id”    |Display a specific user's favorite cafes.|
|PUT|Update|“/api/user/favorites/:id”    |Delete a specific favorite cafe from the user model (removes an item from favorites array).|

## Challenges
    * Referencing models and setting up controllers that allow for the manipulation of referenced data.
    * Differentiating between req.body and req.params when making calls to the backend from the frontend.
    * Troubleshooting frontend API calls when backend routes were functioning.
    * connecting front end to back end and make the connections work