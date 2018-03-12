const Joke = require("../models/Joke.js")

module.exports = {                                                              // The only place we use model is in controller
    index: (req, res) => {
        Joke.find({}, (err, allDemJokes) => {
            if(err) return console.log(err)
            res.render("jokes/index", {jokes: allDemJokes})                     // jokes will be available to us anywhere in the app as a variable
        })
    },
    show: (req, res) => {
        Joke.findById(req.params.id, (err, thatJoke) => {
            if(err) return console.log(err)
            res.render("jokes/show", {joke: thatJoke})                          //making thatJoke available in that view
        })
    },
    new: (req, res) => {
        res.render("jokes/new")
    }, 
    create: (req, res) => {
        Joke.create(req.body, (err, brandNewJoke) => {
            if(err) return console.log(err)
            res.redirect("/jokes")
        })
    }, 
    edit: (req, res) => {
        Joke.findById(req.params.id, (err, thatJoke) => {
            if(err) return console.log(err)
            res.render("jokes/edit", {joke: thatJoke})                                         //making thatJoke available in that view               
        })
    }, 
    update: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, (err, updatedJoke) =>{               // Find the joke by id and Second arguement is the body of data to be updated
            res.redirect(`/jokes/${req.params.id}`)
        })                                                                                   // No way to send patch requests and delete requests in browser with HTML
    }, 
    destroy: (req, res) => {
        Joke.findByIdAndRemove(req.params.id, (err) =>{                                     
            res.redirect("/jokes")
        }) 
    }
}