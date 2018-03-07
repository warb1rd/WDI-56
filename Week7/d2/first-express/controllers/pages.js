var fs = require("fs")                                                       // Required fs package here because we're calling it in the objects functions.

module.exports = {
    home: function(req, res){
        fs.readFile("./views/home.html", "utf-8", function(err, data){       // If we dont put the '.', it becomes the absolute path. the '.' says from whereever we are, go to the specified directory '..' to go back one folder and go into views folder
            res.send(data);                                                   // Sends the data to the viewpage
        })                
    }, 
    about: function(req, res){
        fs.readFile("./views/about.html", "utf-8", function(err, data){      // If we dont put the '.', it becomes the absolute path. the '.' says from whereever we are, go to the specified directory
            res.send(data);                                                  // Can also send html in the res.send function                        
        })                                                                    
    },
    contact: function(req, res){
        fs.readFile("./views/contact.html", "utf-8", function(err, data){
            res.send(data);
            var firstName = "Mahima"
            var lastName = "Rao"
            var phoneNumber = "1122334455"

            res.send(`Welcome, ${firstName} ${lastName} ${phoneNumber}. Today is ${new Date()}`)
        })
    }
}