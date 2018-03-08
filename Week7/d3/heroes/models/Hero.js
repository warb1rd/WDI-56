const mongoose = require("mongoose")

const heroSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    bio: {type: String, default: null},
    isReal: {type: Boolean}
})

const Hero = mongoose.model("Hero", heroSchema)

module.exports = Hero