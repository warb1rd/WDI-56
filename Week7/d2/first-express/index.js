var express = require("express")                                        // What is being required is a function. 
var app = express()                                                     // Creates an express application with the express function brought in by requiring it.
var logger = require("morgan")                                          // Logs requests in terminal (useful for debugging)
var pagesCtrl = require("./controllers/pages.js")                       
var PORT = 3000 
//All routes triggered after this is getting logged.
app.use(logger("dev"))                                                  // .use Executes a function before processing routes. dev is a predefined mode(middleware) (eg. tiny, common etc.)

app.get("/",pagesCtrl.home )
app.get("/about", pagesCtrl.about )
app.get("/contact", pagesCtrl.about)           


// Setting up a web server
app.listen(PORT, function(err){                                         // Argument for this function represents an error. If there isn't then it wont show.
    // if(err){
    //     console.log(err)                                             // Will give an error if another server is running on 3000
    // }else{
    //     console.log("listening on server 3000")
    // }
    console.log(err || `Listening on server ${PORT}}.`)                 // One-liner version of if else
})


//  app.listen takes callback function and happens at a later time. It reserves a port number and binds to it 

// app.post("/new-user") - to post request for new user

//  app.get("/home", function(req, res){
//     res.send("<h1>The home page</h1>")                               // Equivalent of res.write and res.end all in one                        
//  })
