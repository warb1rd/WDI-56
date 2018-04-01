const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const minionsRouter = require("./Router/minions.js");
const PORT = 3000

mongoose.connect('mongodb://localhost/minions', (err) => {
    console.log(err || "Connected to MongoDB")
})

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/minions", minionsRouter)

app.listen(PORT, (err) => {
    console.log(err || `Server is running on ${PORT}`)
})