const express = require("express")
const app = express()
const logger = require("morgan")
const PORT = 3000

app.use(logger("dev"))

var books = [
    {name: "HarryPotter", author: "Rowling"},
    {name: "LOTR", author: "Tolkein"}, 
    {name: "Matilda", author: "Dahl"},     
]

app.get("/books", function(req, res){
    res.send(books)
})

app.post("/books/:name/:author", function(req, res){
    books.push({ 
        "name": req.params.name,
        "author": req.params.author
    })
    res.send(books)
})
// app.get("/books/:name", function(req, res){
//     res.send(req.params.name)
// })

app.delete("/books/:name", function(req, res){   
    // req.params.name = null
    // req.params.author = null
    var bookIndex = 1
    books.forEach((book, i) => {
        if(book.name === req.params.name) {
            bookIndex = i
        }
    })
    books.splice(bookIndex, 1)
    res.send(books)
})

app.patch("/books/:name/:new_name", function(req, res){

    books.forEach((book) => {
        if(book.name === req.params.name) {
            book.name = req.params.new_name
        }
    })
    res.send(books)
})


app.listen(PORT, function(err){
    console.log(`Server started on port: ${PORT}`)
})

