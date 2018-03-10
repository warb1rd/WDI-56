// RREQUIRE ALL PACKAGES AND ROUTES & SET PORT
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const logger = require("morgan")
const bodyParser = require("body-parser")
const Frameworks = require("./models/Framework.js")
const frameworksRouter = require("./routes/frameworks-routes.js")
const PORT = 3000

//CONNECT TO DATABASE TECHNOLOGY-TRACKER
mongoose.connect("mongodb://localhost/technology-tracker", (err) => {
    console.log(err || "Connected to MongoDB")
})

//USE THE BODY PARSER AND MORGAN TO LOG EVERYTHING
app.use(bodyParser.json())
app.use(logger("dev"))

app.get("/", (req, res) => {
    res.json({message:"API root"})
})

// PLUGIN THE ROUTER AND GIVE PATH
app.use("/api/frameworks", frameworksRouter)

app.listen(PORT, (err) => {
    console.log(err || `Listening on server ${PORT}`)
})

