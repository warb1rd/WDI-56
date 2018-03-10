const express = require("express")                                                                                              //created an http client
const app = express()
const axios = require("axios")
const httpClient = axios.create()
const PORT = 3000

//API KEY: QAPRLt2ptKdeyTlM1jlFm234rZMv2CQB                                                                                  // Never put access key inside the code. 

// https://api.giphy.com/v1/gifs/random?api_key=QAPRLt2ptKdeyTlM1jlFm234rZMv2CQB&tag=&rating=G                               //Query params{api_key:sdfadfadsf, tag=null, rating: G}

//SEARCH TERM
app.get("/search/:term", (req, res) => {
    const options = {
        method: "get",
        url: `https://api.giphy.com/v1/gifs/search?api_key=QAPRLt2ptKdeyTlM1jlFm234rZMv2CQB&q=${req.params.term}&limit=25&offset=0&rating=G&lang=en`
    }

    httpClient(options).then((apiResponse) => {
        console.log(apiResponse.data.data[0].images.fixed_height.url)
            var images =  ""
            //loop through list of images (array) we get back from giphy
            for(var i = 0; i < apiResponse.data.data.length; i++){
        console.log(i)         
            //create one string that contains an <img> for each
                const currentImageUrl = apiResponse.data.data[i].images.fixed_height.url          
                images += `<img src= "${currentImageUrl}" />`
            }
        res.send(images)
    })
})

//STICKERS TERM

app.get("/stickers/:term", (req, res) => {
    const options = {
        method: "get",
        url: `https://api.giphy.com/v1/stickers/search?api_key=QAPRLt2ptKdeyTlM1jlFm234rZMv2CQB&q=${req.params.term}&limit=25&offset=0&rating=G&lang=en`
    }

    httpClient(options).then((apiResponse) => {
        console.log(apiResponse.data.data[0].images.original.url)
            var results =  ""
            const allImages = apiResponse.data.data 
            allImages.forEach((image) => {                                                  //i is each element in an array
                const currentImageUrl = image.images.original.url
                results += `<img src = "${currentImageUrl}" />`
            })          
            res.send(results)
        })
    })


 //RANDOM TAG   
app.get("/random/:tag", (req, res) => {
    const options = {
        method: "get",                                                                                                       // If no method is provided, it defaults to get                                    //Specify the method of the request and the url of the request.
        url: `https://api.giphy.com/v1/gifs/random?api_key=QAPRLt2ptKdeyTlM1jlFm234rZMv2CQB&tag=${req.params.tag}&rating=G`    // interpolating req.params.tag and instead of " ", using back ticks` `
    }
    
    httpClient(options).then((apiResponse)=> {
        var imageUrl = apiResponse.data.data.images.original.url
        console.log(imageUrl)
        res.send(`<img src= "${imageUrl}" />`)
    })  
})

app.get("/trending", (req, res) => {
    const options = {
        method: "get",
        url: "https://api.giphy.com/v1/gifs/trending?api_key=QAPRLt2ptKdeyTlM1jlFm234rZMv2CQB&limit=25&rating=G"
    }

    httpClient(options).then((apiResponse) =>{
        var imageUrl = apiResponse.data.data[3].images.original.url
        res.send(`<img src= "${imageUrl}"/>`)
    })
})

//     httpClient(options).then((apiResponse)=> {                                                      //Send this request, THEN do a callback function. Its a function for a specific type of method
//         var title = apiResponse.data.data.children[0].data.title
//         res.send(`<h2>${title}</h2>`)
//     })                                                                                               
// })


//SHORT WAY
// httpClient({method: "get", url: "http://api.open-notify.org/iss-now.json"})                 

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}`)
})




// FOR EACH LOOP
//Runs this function once for each element of the array
//const images = apiResponse.data.data 
//images.forEach((image) => {                                   //i is each element in an array
//    const currentImageUrl = image.images.fixed_height.url
//    images += `<img src="${currentImageUrl}/>`

// })