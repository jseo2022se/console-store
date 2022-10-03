const mongoose = require('mongoose')
require('dotenv').config()

function mongoConfig() {
    mongoose.connect(process.env.MONGO_DB)
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
}

module.exports = mongoConfig