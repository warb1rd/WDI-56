// REQUIRE MONGOOSE SINCE WE'RE USING IT TO CONNECT MODEL
const mongoose = require("mongoose")

// CREATE THE SCHEMA WITH FIELDS
const frameworkSchema = new mongoose.Schema ({
    name: {type: String, required:true},
    description: {type: String},
    documentationUrl: {type: String},
    rating:{type: Number, default: 3, min: 0, max: 5 },
    releaseYear: {type: Number}
})

const Framework = mongoose.model("Framework", frameworkSchema)
module.exports = Framework