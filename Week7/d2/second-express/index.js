const express = require("express")                                          // Value of express will never change so instead of var, use const since the value can't be changed accidently
const app = express()
const logger = require("morgan")
const PORT = 3000

// app.use(logger("dev"))                                                   // Apply the middleware using dev settings. Logs every request to terminal

function customLogger(req, res, next){                                      // Middleware is always a function that takes request and response arguments. Add a third argument to go on to the next line of code outside this function.
    console.log(req.url)
    next()
}

function throttle(req, res, next){                                          // Throttling function - slows down the server to prevent overload. This is a middleware
    setTimeout(next, 2000)                                                  // Throttle it 5 sec. Helps simulate slow networks.
}

// function throttle(req, res, next){                                       // Induces a slow network
//     setTimeout(function(){
//         next()
//     }, 5000)                                                                
// }

app.use(throttle)
app.use(customLogger)

app.get("/", function(req, res){                                            // Every controller action (function) will have access request that comes in and respond to it 
    res.send("We come in peace.")
})                                                                          

app.get("/users", function(req, res){
    res.send("Index of users...")
})

// app.get("/users/:id", function(req, res){                                // Whatever you declare in params in url youll be able to access in the interpolation
//     res.send(`<h2>${req.params.id}</h2>`)                                // Anything in this route that has colon: is added in params(which will always be string)
// })

// app.get("/users/:userId/posts/:postId", function(req, res){             
//     console.log(req.params)
//     res.send(`<h2>${req.params.postId}</h2>`)                            
// })                                                                       // express will register a key in params object


app.listen(PORT, function(err){
    console.log(err || `Server running on ${PORT}`)                         // Back ticks allow html and interpolations
})
