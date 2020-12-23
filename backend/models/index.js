const mongoose = require ("mongoose")
mongoose.Promise = global.Promise

const db = {}

db.user = require('./user.model')
db.role = require('./role.model')

db.mongoose = mongoose

//setting some preliminary data
db.Roles = ['users', 'admin']

module.exports = db
