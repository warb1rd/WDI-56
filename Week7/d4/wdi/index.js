const express = require("express")
const app = express()                                                           // Its a web framework
const mongoose = require("mongoose")                                            // ODM (object document mapping) but its not a relational database
const bodyParser = require("body-parser")                                       // Middleware. Server cannot see data that we attempt to send a post request to create a new student. 
const logger = require("morgan")
const studentsRouter = require("./routes/students.js")
const PORT = 3000                                                               

mongoose.connect("mongodb://localhost/wdi", (err) => {                          // not every call back function will have an error
    console.log(err || "Connected to MongoDB")
})

app.use(bodyParser.json())                                                      // Function that runs between a request and response. body-parser prepares body of data
app.use(logger("dev"))                                                          //Server cannot see data that we attempt to send a post request to create a new student. 
                                                                                //body parser with json format allows us to make data available inside of actions in req.body. It splits it into key value pair
// ROUTES
app.get("/", (req, res) => {
    res.json({message: "API root."})                                            // Stringified into json
})

app.use("/api/students", studentsRouter)                                        //plugging in a router built somewhere else

// using the route "/" to namespace for apis.
// all student routes are always going to start with /api/students

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}`)
})


// function () {}  is same as  () => {}

// req.method - get put patch destroy
// req.url - url user puts in
// req.params - params user requests for