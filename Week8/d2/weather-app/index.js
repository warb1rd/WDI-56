const dotenv = require("dotenv").config()                                       //Method that looks for .env files and loads it into other files
const express = require("express")
const app = express()
const logger = require("morgan")
const bodyParser = require("body-parser")
const axios = require("axios")
const httpClient = axios.create()
const PORT = 3000
const apiKey = process.env.API_KEY

console.log(apiKey)

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))      

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get("/weather/:city", (req, res) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKey}&units=imperial`
    const options = {method: "get", url: apiUrl}
    httpClient(options).then((apiResponse) => {
        res.json(apiResponse.data)
    })
})

app.get("/test/:message", (req,res) => {
    console.log(req.params.message)
    res.json({message: "Message received."})
})

app.listen(PORT, (err) => {
    console.log(err || `Listening on ${PORT}`)
})
