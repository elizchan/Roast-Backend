const mongoose = require ("mongoose")
mongoose.Promise = global.Promise

const db = {}

db.user = require('./user.model')
db.role = require('./role.model')
db.cafe = require('./cafe.model')
db.comment= require('./comments.model')

db.mongoose = mongoose

//setting some preliminary data
db.Roles = ['users', 'admin']

module.exports = db
