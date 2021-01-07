• link to frontend repo
• link to deployed api
• explanation of backend tech used
• general approach (a couple paragraphs)
• installation instructions
• table with RESTful routes & resources available at each endpoint
• unsolved problems / major hurdles

# Roast
## Front-end Repo Link
https://github.com/SFX818/Team-8-frontend
## Link to Deployed API
https://roastbackend.herokuapp.com/
## Technology
    * MongoDB
    * Mongoose
## Installation Instructions
    * Fork and clone repo
    * npm -i
## Routes

ROUTE |CRUD  |URL           |DESCRIPTION                          |
GET   |Read  |“/”           |Home                                 |
GET   |Read  |“/profile”    |Show user’s profile page.            |
GET   |Read  |‘/results”    |Show user’s query for zipcode        |
GET   |Read  |“/results/:id”|Shows specific cafe information      |
POST  |Create|“/results/:id”|Leave a review for specific cafe     |
POST  |Create|“/results/:id”|Add specific cafe to user’s favorites|
PUT   |Update|“/results/:id”|User can edit their review           |
DELETE|Delete|“/results/:id”|User can delete their review         |
DELETE|Delete|“/profile”    |User can delete favorite from profile|

## Challenges
    * connecting front end to back end and make the connections work