const express = require("express")
const app = express()
const server = require("http").Server(app)                                          //Creating a server by going into http package and running th Server constructor function and passing our app 
const io = require("socket.io")(server)                                             //

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

// SETTING CENTER HUB WHERE MULTIPLE CLIENTS CAN CONNECT TOGETHER
io.on("connection", (socket) => {                                                   //
    console.log("A new client has connected")
    io.emit("new-user-connection", {boom: "BANANA"} )                               //Second arguement can be an object with many key valie pairs
    socket.on("new-message", (message) => {
        io.emit("broadcast", message)                                               // Whenever emitting, give name and data associated with the message
    })
})

// Goal is to let server detect a tcp connection

server.listen(3000, (err) => {
    console.log(err || "Listening on server 3000")
})