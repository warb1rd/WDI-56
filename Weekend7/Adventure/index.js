const dotenv = require('dotenv').config()
const express = require("express")
const axios = require("axios")
const mongoose = require("express")
const app = express()
const httpClient = axios.create()
const PORT = 3000

app.get("/users/:username", (req, res) => {
    const options = {
        method: "get",
        url: `https://api.pinterest.com/v1/users/${req.params.username}/?access_token=${process.env.ACCESS_TOKEN}&fields=first_name%2Cimage`,
        // url: `https://api.pinterest.com/v1/users/user/?access_token=${process.env.ACCESS_TOKEN}&fields=${req.params.username}%2Cimage`,
        contentType: "application/json"
        // https://api.pinterest.com/v1/boards/board/pins/?access_token=${process.env.ACCESS_TOKEN}&fields=link%2Cimage%2Cboard
    }
    console.log(options.url);

    httpClient(options).then((apiResponse, err) => {
        console.log(apiResponse.data.data)
        let user = apiResponse.data.data;
        // console.log(user);
        var name = apiResponse.data.data.first_name
        var image = apiResponse.data.data.image['60x60'].url
        var results = `
                    <style>
                    body{
                        background-color: black;
                        color: white;
                    }
                    div{
                        margin: 0 auto;
                    }
                    </style>
                    <h2>${name}</h2>
                    <img src = "${image}" />
                    `
                res.send(results)
    })
})

app.listen(PORT, (err) => {
    console.log(err || `Listening on server ${PORT}`)
})

 // images.forEach((i) => {                                                                         
        //     const currentImageUrl = i.image_medium_url
        //     results += `<img src="${currentImageUrl}/>`
        // })