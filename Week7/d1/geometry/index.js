
var geometry = require("./geometry.js")                                     // Module(geometry.js) is a package of functionality that can be used as plug and play. ./ is relative file path.

console.log(geometry.diameter(10));                                         // Calling methods from geometry.js

var http = require("http")                                                  // nmp module - imports built in package to create a server

function reqResCyc(req, res){
    if(req.url !== "./favicon.ico"){                                        // Ignores requests for this url. 
        var number = parseInt(req.url.slice(1))                             // It turns the 1-last index of url string into an integer

        var circumference = geometry.circumference(number)
        var diameter = geometry.diameter(number)
        res.write("Circumference:"+circumference+" "+"Diameter:"+diameter)   // Send back the circumference for that number. Must convert number back to string. 
        
        
        // res.write("Circumference:" + geometry.circumference(number).toString() + " " + "Diameter:" + geometry.diameter(number).toString())        // Send back the circumference for that number. Must convert number back to string. 
        res.end()
    }
    // res.write("Thanks for the request")
    // res.end()
}
var server = http.createServer(reqResCyc)                                   // Build a server that uses function for req res. Passing reqResCyc as a callback function
server.listen(3000)                                                         // Listen for requests on that server at port 3000