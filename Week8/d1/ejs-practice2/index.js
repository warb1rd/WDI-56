const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")
const logger = require("morgan")
const ejsLayouts = require("express-ejs-layouts")
const statesRouter = require("./routes/states.js")

const PORT = 3000

mongoose.connect("mongodb://localhost/ejs-practice2",(err)=> {
    console.log(err || "Connected to MongoDB")
})

app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(ejsLayouts)
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    res.send("ROOT ROUTE")
})

app.use("/states", statesRouter)

app.listen(PORT, (err) => {
    console.log(err || `Listening on ${PORT}`)
})