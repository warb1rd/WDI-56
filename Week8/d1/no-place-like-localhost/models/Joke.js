const
    mongoose = require("mongoose"),
    jokeSchema = new mongoose.Schema({
        author: String, 
        setUp: String, 
        punchLine: String
    })

    const Joke = mongoose.model("Joke", jokeSchema)             //Registering a model name in mongoose
    module.exports = Joke