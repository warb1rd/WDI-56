const Minion = require("../Model/Minion.js");

module.exports = {
    index: (req, res) => {
            Minion.find({}, (err, allMinions) => {
                if(err) return console.log(err)
                res.json(allMinions)
        })   
    }, 

    show: (req, res) => {
            Minion.findById(req.params.id, (err, thatMinion) => {
                if(err) return console.log(err)
                res.json(thatMinion)
        })   
    },

    create: (req, res) => {
            Minion.create(req.body, (err, newMinion) => {
                if(err) return console.log(err)
                console.log(newMinion)
                res.json(newMinion)
        })
    } ,
  
    update: (req, res) => {
            Minion.findByIdAndUpdate(req.params.id, req.body, (err, updatedMinion) =>{               
                console.log("minion updated")
                res.json(updatedMinion)
        })                                                                                   
    }, 

    destroy: (req, res) => {
            Minion.findByIdAndRemove(req.params.id, (err) =>{                                     
                res.json("minionLost")
        }) 
    }
}
