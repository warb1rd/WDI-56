const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on("connection", (socket) => {                                                  
    console.log("A new client has connected")
    io.emit("new-user-connection", "new painter joined")    

    socket.on("new-paint", (paintCoordinates) => {
        console.log(paintCoordinates)
        io.emit("broadcast", paintCoordinates)                                    
    })                     
})

server.listen(3000, (err) => {
    console.log(err || "Listening on server 3000")
})