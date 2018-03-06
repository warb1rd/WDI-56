//  javascript object notation (json) - keys have quotes because thats what makes them universal. 
// Any language can read it since everything is string.

var chalk = require("chalk");                           // It first looks for it in node_module folder. If its not there then it goes to global built-in modules 
// var moment = require("moment")

setTimeout(function(){                                  //setTimeOut(code,time)
    console.log(chalk.green("Hello World"));
}, 1000)

// print out how long ago dec 25 1990 was.

// var ago =  moment([1990, 11, 25]).fromNow()         
// console.log(ago)