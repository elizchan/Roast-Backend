const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('./config/db.config')
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
require('dotenv').config()

app.use(cors())

//parse request of content type - application/json
app.use(bodyParser.json())
//parse request of content type - application/x-www-form-urlencoded
//gives us access to form data
app.use(bodyParser.urlencoded({extended: true}))

//SETUP MONGOOSE
const db = require('./models/index.js')
const Role = db.role

const dbURI = process.env.MONGODB_URI || `mongodb:${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`
//connect to mongo database
db.mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Successfully connected to MongoDB!")
        initial()
    })
    .catch(err => {
        console.log("Error connecting to MongoDB:", err)
        process.exit()
    })

//simple route - do i work?

app.get('/', (req, res)=>{
    res.json({message: "Welcome to the homepage."})
})

//import the routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)
require('./routes/cafe.routes')(app)
require('./routes/comments.routes')(app)

//set the port, listen for request
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'moderator' to roles collection");
        });
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }