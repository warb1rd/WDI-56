const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 3000
const Robot = require("./models/Robot.js")

mongoose.connect('mongodb://localhost/robots', function(err){                                          // Connection string will always be mongodb://localhost/<databasename> in your local server. Browser can only make http connections, mongo is for loacl servers
    console.log(err || "Connected to MongoDB")                                                         // Error typically happens when mongod is not running
})                                                                                                     // Mongoose maintains a persistent connection untill we shut off server or app crashes

app.get("/robots", function(req, res){
    Robot.find({}, function(err, allDemRobots){
        res.json(allDemRobots)                                                                     
    })                                                                                                 // res.json - It takes javascript object or array of js objects and converts it to string. To see the raw data easily without rendering.
})

app.get("/robots/:id", function(req, res){
    Robot.findById(req.params.id, function(err, thatRobot){                                            //This is where we query the database for that model of robot
        res.json(thatRobot)                                                                     
    })                                                                                             
})

app.listen(PORT, function(err){
    console.log(err || `Server runnning on ${PORT}.`)
})



//MOVED ALL OF THE BELOW COMMENTED TO ROBOT.JS MODEL
//-------------------------------------------------------------------
// Creating a schema that sets the format for the collection. Description of what robots could store not what it SHOULD store. So if you add anything other than name, version and year, it'll strip it away before saving.
// const robotSchema = new mongoose.Schema({                                                          // (Schema)Inbuilt constructor method that allows us to generate a schema
//     name: String,
//     version: String,
//     year: Number,
// })  

// const Robot = mongoose.model("Robot", robotSchema)                                                  // When creating a model, a string name must be given so it can record it. Technically registering robot model in mongo(under the hood), and what schema is this model based off of 
//-------------------------------------------------------------------
// SHORT WAY OF CREATING A DOCUMENT
// Robot.create({name:"Wall-E", version:"1.2.3", year:2008},function(err, brandNewRobot){              // Give the callback function.
//     if(err) return console.log(err)                                                              
//         console.log(brandNewRobot)
// })  

// Robot.findByIdAndRemove("5aa06cd430058591d53b6812", function(err, deletedRobot){                    //Since we're using findById, no need to say {_id:....}
//     if(err) return console.log(err)                                                              
//     console.log("Robot Deleted")
// })  




// LONG WAY OF CREATING A DOCUMENT
// var myNewRobot = new Robot()                                                                        //Similar to Robot.new in ruby
// myNewRobot.name = "Boston Dynamics Dog"
// myNewRobot.version = "0.5"
// myNewRobot.year = 2018
// myNewRobot.weapons = ["laser", "saw", "shrapnel grenade"]


// myNewRobot.save(function(err, brandNewRobot){                                                       // .save is a function! Need a callback function to tell us when it's done saving. We'll either get an error or a brand new robot.
//     if(err) return console.log(err)                                                                 // if it encounters errors, it console logs and stops there. Doesn't go to next line of code in the function
//     console.log(brandNewRobot)
// })                                                                                  


// FIND ALL ROBOTS - NO CRITERIA
// Robot.find({}, function(err, allDemRobots){                                                         // we don't have any criteria so put an empty object, and almost always add a callback function
//     console.log(allDemRobots)
// }) 


// LONG WAY OF UPDATING DOCUMENT WITH MONGOOSE
// Robot.findByIdAndUpdate()                                                                           // This is the short way

Robot.findById("5aa083928c80ce9b680762dc", function(err, thatRobot){                                   // Unless specified, mongoose does $set under the hood.
    thatRobot.name = "Bosdynam"
    thatRobot.save(function(err, updatedRobot){ 
        if(err) return console.log(err)
        console.log("Robot Updated!")
    })
})