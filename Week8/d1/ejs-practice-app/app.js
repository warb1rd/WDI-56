//changed "main" in package.json file to app.js

const 
    express = require("express")
    app = express()
    // ejs = require("ejs")
    ejsLayouts = require("express-ejs-layouts")
    PORT = 3000

app.set("views", `${__dirname}/views`)                         // (two underscores)__dirname = directory name. Telling express where to look for templates(views)
app.set("view engine", "ejs")                                  // sets the view engine to ejs
app.use(ejsLayouts)

app.get("/", (req, res) => {
    var users = [
        {name: "Jack", email: "jack@gmail.com"},
        {name: "Jill", email: "jill@gmail.com"},
        {name: "Pat", email: "pat@gmail.com"},
    ]

    res.render("index", {title:"May the force be with you!", users})      // var clients on line14 will be title:"", users:clients 
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}`)
})