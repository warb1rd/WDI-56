const       
    express = require("express"),                                                                           // add , after each const because ootherwise it acts as a variable.
    app = express(),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),                                                            // It lets you use requests like patch and delete
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    ejsLayouts = require("express-ejs-layouts"),
    jokesRouter = require("./routes/jokes.js"),
    PORT = 3000
    
    mongoose.connect ("mongodb://localhost/no-place-like-localhost", (err) => {
        console.log(err || "Connected to MongoDB")
    })

    app.set("views", `${__dirname}/views`)                                                                  // app.set creates an option for app. Use this directory as my views folder. Setting view to views folder.// In this directory, look for a folder called views a set it as views
    app.set("view engine", "ejs")                                                                           // Set our view engine as ejs. Any views in the views directory are ejs files.
    
    app.use(ejsLayouts)                                                                                     // 
    app.use(logger("dev"))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))                                                       //Anytime you want to run middleware, app.use
    app.use(methodOverride("_method"))                                                                      // if the request thats coming in has _method named key, treat it as the value that it represents

    app.get("/", (req, res) => {
        res.send("ROOT ROUTE")
    })

    app.use("/jokes", jokesRouter)

    app.listen(PORT, (err) => {
        console.log(err || `Server running on ${PORT}`)
    })