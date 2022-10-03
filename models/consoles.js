// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const vgConsoleSchema = new Schema({
    name: { type: String, required: true }, 
    details: { type: String, required: true },
    quantity: { type: Number, required: true},
    isUsed: Boolean,
    imgUrl: { type: String, required: true}
})

// create a Model from our Schema
const vgConsole = mongoose.model('vgConsole', vgConsoleSchema)

// export our Model
module.exports = vgConsole