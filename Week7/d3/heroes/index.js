const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 3000
const Hero = require("./models/Hero.js")

mongoose.connect("mongodb://localhost/heroes", function(err){
    console.log(err || "Connected to MongoDB")
})

app.get("/heroes", function(req, res){
    Hero.find({}, function(err, allHeroes){
        res.json(allHeroes)    
    })
})

app.get("/heroes/:id", function(req, res){
    Hero.findById(req.params.id, function(err, theHero){
        res.json(theHero)
    })
})

app.delete("/heroes/:id", function(req,res){
    Hero.findByIdAndRemove(req.params.id, function(err, removeHero){
        if (err) return console.log(err)
        console.log("Hero deleted")
    })
})

// var myHero = new Hero()
// myHero.name = "Someone"
// myHero.age = 27
// myHero.bio = "He's a meh"
// myHero.isReal = true

// myHero.save(function(err, newHero){
//     if(err) return console.log(err)
//     console.log(newHero)
// })


app.listen(PORT, function(err){
    console.log(err || `Listening on ${PORT}`)
})

