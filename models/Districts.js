//Dependencies
require('dotenv').config()
const mongoose = require('mongoose')
const {Schema } = mongoose

const districtSchema = new Schema ({
    name: {
        type: String,
        required: true
    }
})


module.exports = districtSchema
