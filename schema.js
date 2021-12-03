const mongoose = require('mongoose')

const Schema = mongoose.Schema

var bookSchema = new Schema({
    title: String,
    issuer: String,
    dueDate: Date
})

module.exports = mongoose.model("Book", bookSchema)