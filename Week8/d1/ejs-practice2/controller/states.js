const State = require("../models/State.js")

module.exports = {
    index: (req, res) => {
                State.find({}, (err, allStates) => {
                        if(err) return console.log(err)
                        res.render("states/index", {states: allStates})
                })
           },

    show: (req, res) => {
                State.findById(req.params.id, (err, thatState) => {
                        if(err) return console.log(err)
                        res.render("states/show", {state: thatState})
                })
          },

    new: (req, res) => {
            res.render("states/new")
         },
 
    create: (req, res) => {
                State.create(req.body, (err, newState) => {
                        if(err) return console.log(err)
                        res.redirect("/states") 
                })
            },

    edit: (req, res) => {
                res.send("edited")        
          },
    
    update: (req, res) => {
                res.send("updated")   
            },
    
    destroy: (req, res) => {
                State.findByIdAndRemove(req.params.id, (err) => {                                     
                res.redirect("/states")
            })
        }
}