console.log("May the force be with you")

var $searchBtn = $("#search-btn")
var $searchInput = $("#search-input")
var $cityName = $("#city-name")
var $cityTemperature = $("#city-temperature")
var $cityHumidity = $("#city-humidity")
var $weatherIcon = $("#weather-icon")
var httpClient = axios.create()

$searchBtn.on("click", () => {                              //When we click the button, it runs a function
    const city = $searchInput.val()                         //We're going to get the input val using val() method
    const options = {url: `/weather/${city}`}               // Sending a request to my weather route with city from input field
    httpClient(options).then((serverResponse) => {          //We're contacting our server so data is the server response data.
        console.log(serverResponse.data)                    // If we don't add data, it'll return all the responses.
        $cityName.text(serverResponse.data.name)
        // var temperature = (serverResponse.data.main.temp * 9/5) - 459.67
        // $cityTemperature.text(temperature)
        const icon = serverResponse.data.weather[0].icon
        const temp = serverResponse.data.main.temp
        const hum = serverResponse.data.main.humidity
        $weatherIcon.attr("src", `http://openweathermap.org/img/w/${icon}.png`)
        $cityTemperature.text(temp)        
        $cityHumidity.text(hum)
    })
})
  