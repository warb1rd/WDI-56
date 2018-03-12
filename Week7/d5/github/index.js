const dotenv = require("dotenv").config()                                                           //GOES INTO THE FILE AND ADDS THE KEY VALUE PAIR IN THE CODE       
const express = require('express')
const app = express()
const axios = require('axios')
const httpClient = axios.create()
const ejsLayouts = require("express-ejs-layouts")
const PORT = 3000

app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")
app.use(ejsLayouts)

app.get("/users/:username", (req, res)=>{
    const options ={
        method: 'get',
        url: `https://api.github.com/users/${req.params.username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`  
    }
    httpClient(options).then((apiResponse) => {
        const users = {
            usersLogin: apiResponse.data.login,
            usersAvatar: apiResponse.data.avatar_url,
            usersLocation: apiResponse.data.location
        }

        res.render("index", {title:"username: ", users})
    })     
})  

app.get("/repos/:username/:repo", (req, res)=>{
    const options ={
        method: 'get',
        url: `https://api.github.com/repos/${req.params.username}/${req.params.repo}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`  
    }
    httpClient(options).then((apiResponse) => {
        const usersRepo = apiResponse.data
        // console.log(ownersRepo)
        // res.send("on the right page")
        res.send(usersRepo)
    })  
}) 

// results += `<h1> "${}" </h1>`
 
        // res.send(usersLogin)
//     })


app.listen(PORT, err =>{
    console.log(err || `Server running on ${PORT}`)
})