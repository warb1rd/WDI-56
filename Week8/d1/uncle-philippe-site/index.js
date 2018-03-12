const express = require("express")
const ejsLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")
const app = express()
const PORT = 3000

app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")
app.use(ejsLayouts)
app.use(bodyParser.urlencoded())                     //For a form,it submits as url encoded data

var user = {
    name: "Philippe",
    bio: "is a super teacher!",        
    email: "philippe@ga.com",
    phone: 1234567890,
    favoriteFoods: ["cheese", "eggs", "tea"]
}


app.get("/home", (req, res) => {

    res.render("home", {title: "May the force be with you, ", user})
})

app.get("/about", (req, res) => {
 
    res.render("about", {user})
})

app.get("/contact", (req, res) => {

    res.render("contact", {user})
})

app.get("/favoritefoods", (req, res) => {

    res.render("favorite_foods", {user})
})

app.get("/comments", (req,res) => {
    res.render("comments")
})
app.post("/comments", (req, res) => {

    //routes

    console.log(req.body)
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}`)
})