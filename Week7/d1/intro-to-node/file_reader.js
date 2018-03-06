var fs = require("fs")                                              // fs(file system) is an inbuilt node package and readFile method comes with it. It accesses files.
                                                                    // Any js file that we write can be 'required' or accessed
console.log("Before loading the limerick")

fs.readFile("limerick.txt", "utf-8",function(error, data){
    console.log(data.toLocaleUpperCase())                   
}) //This is an asynchronous code. It doesn't run in sequence.

console.log("After loading the limerick")


