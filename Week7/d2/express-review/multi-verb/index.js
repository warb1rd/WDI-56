const express = require("express")
const app = express()
const PORT = 3000
var checkPaid = false
var rats = ["splinter", "vince", "arthur"]
var total = 0
var products = {
    coke:{price: 4},
    burger:{price: 10},
    fries: {price: 6}
}

app.get("/product/:name", function(req, res){
    console.log(req.params.name)
    total = total + products[req.params.name].price
    console.log(total)
    res.send(`Here's your ${req.params.name}.`)
})

app.get("/total-purchase", function(req, res){
    res.send(`Check paid: ${total}`)
})

app.patch("/reset-order", function(req, res){
    checkPaid = false
    total = 0
    console.log(total)
    res.send(`Order Reset`)
})

app.get("/payment-status", function(req, res){
    checkPaid = true
    res.send(`Check paid: ${checkPaid}`)
})

app.post("/pay", function(req, res){
    res.send("That'll be 10 dollars.")
})

app.get("/rats", function(req, res){
    res.send(rats)
})

app.delete("/rats", function(req, res){
    rats = null
    res.send(rats)
})

app.listen(PORT, function(err){
    console.log(`Server started on port: ${PORT}`)
})