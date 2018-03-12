var error = new Error("Something went wrong")                                           //ERROR has its own constructor function

setTimeout(() => {
    console.log(error)
}, 3000)

function truncateString(str, len){
    if(typeof(str) !== "string" || typeof(len) !== "number"){
        return new Error("first arguement must be string, second arguement must be a number")
    }
    return str.slice(0,len)                                                           //Can use substring(0, length)
 }
 
 truncateString("Hello World", 8)

 