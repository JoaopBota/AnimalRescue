const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Animal', animalSchema)