var http = require("http");                                                     // http is a node inbuilt package that when called combines with 'createServer' function
var fs = require("fs"); 
                                                                                // Create the server. Function passed as parameter is called on every request made.
var server = http.createServer(function(request, response) {                    // Arguments are the requests sent to server and the response.request variable holds all request parameters.response variable allows you to do anything with response sent to the client. 
    response.writeHead(200);                                                    // Write headers to the response.
    response.write("Thanks for the request")
    console.log(request)                                                        // 200 is HTTP status code (means success)                                                                               
                                                                                                                                                            
    if (request.url == "/lim1"){
        fs.readFile("limerick1.txt", "utf-8",function(err, data){
        response.end(data);})                                                   // We MUST end the request.
    } else if (request.url == "/lim2"){
            fs.readFile("limerick2.txt", "utf-8",function(err, data){
            response.end(data);})
        }
    fs.readFile("limerick.txt", "utf-8",function(err, data){
            console.log(data);                       
            response.end(data);
        })
})
server.listen(3000);                                                            // Everytime it recieves a http request, it runs this function.
                                                                                // To run this function, in terminal, type node <filename>
                                                                                // createServer takes a callback function


