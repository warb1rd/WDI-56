const express = require("express")
const app = express()
const logger = require("morgan")
const PORT = 3000

app.use(logger("dev"))

app.get("/", function(req, res){
    res.send(`<h2>May the force be with you</h2>`)
})

app.get("/about", function(req, res){
    var name = "Mahima"
    res.send(`<h3>This site is the third node express site built by ${name}</h3>`)
})

app.get("/contact", function(req, res){
    var firstName = "Mahima"
    var lastName = "Rao"
    var phone = "1234567890"
    var email = "mm@gmail.com"
    res.send(`<p>${firstName} ${lastName} ${phone} ${email}</p><p> Get in touch!</p>`)
})

app.listen(PORT, function(err){ 
    console.log(`The server is running on ${PORT}`)
})