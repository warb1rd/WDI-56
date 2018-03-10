const Framework = require("../models/Framework.js")

module.exports = {
    create: (req,res) => {
                Framework.create(req.body, (err, newFramework) => {
                    if(err) return console.log(err)
                    res.json(newFramework)
                })
            },
    index:  (req, res) => {
                Framework.find({}, (err, allFrameworks) => {
                    if(err) return console.log(err)
                    res.json(allFrameworks)
                })
            },
    show:   (req, res) => { 
                Framework.findById(req.params.id, (err, thatFramework) => {
                    if(err) return console.log(err)
                    res.json(thatFramework)
                })
            },
    update: (req, res) => {
                Framework.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFramework) => {
                    if(err) return console.log(err)
                    res.json(updatedFramework)
                })
            },
    destroy: (req, res) => {
                Framework.findByIdAndRemove(req.params.id, (err, deletedFramework) => {
                    if(err) return console.log(err)
                    res.json(deletedFramework)
                })
            }
}