const mongoose = require("mongoose")
// schemas regulate 
const robotSchema = new mongoose.Schema({                                                          // (Schema)Inbuilt constructor method that allows us to generate a schema
    name: {type: String, required: true},                                                          // Can change here and every subsequent model will change too. (maxlength: 140, unique: true)
    version: {type: String, default: "1.0"},                                                       //by putting it in an object, we've alowed ourselves to set more validations
    year: {type: Number, default: null},
    weapons: [String]
})  

const Robot = mongoose.model("Robot", robotSchema)                                                 // When creating a model, a string name must be given so it can record it. Technically registering robot model in mongo(under the hood), and what schema is this model based off of 
module.exports = Robot