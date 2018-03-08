const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({                     //mongoose schema constructor function
    name: String,
    age: Number,
    enrolled: Boolean
})                   

const Student = mongoose.model("Student", studentSchema)

module.exports = Student