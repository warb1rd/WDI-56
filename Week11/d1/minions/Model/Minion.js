const mongoose = require("mongoose");
const minionSchema = new mongoose.Schema ({
    name: {type:String},
    image: { type: String, default: " https://goo.gl/u6GHrh"}
})

const Minion = mongoose.model("Minion", minionSchema) 
module.exports = Minion
