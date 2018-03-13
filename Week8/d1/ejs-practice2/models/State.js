const mongoose = require("mongoose")
const stateSchema = new mongoose.Schema({
    state: String,
    capital: String,
    knownFor: String
})

const State = mongoose.model("State", stateSchema)
module.exports = State