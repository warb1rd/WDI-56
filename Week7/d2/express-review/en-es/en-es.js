const express = require("express")
const app = express()
const logger = require("morgan")
const PORT = 3000

app.use(logger("dev"))

app.get("/red", function(req, res){
    res.send("rojo")
})

app.get("/sun", function(req, res){
    res.send("sol")
})

app.get("/hand", function(req, res){
    res.send("mano")
})

app.listen(PORT, function(err){
    console.log(`The port is running on ${PORT}`)
})