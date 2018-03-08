const Student = require("../model/Student.js")

module.exports = {
    create: (req, res) => {
                Student.create(req.body, (err, brandNewStudent) => {              
                    if(err) return console.log(err)                                                              
                    console.log(brandNewStudent)
                })
            },
    index:  (req, res) => {                                                                  // namespacing students into api
                Student.find({}, (err, allDemStudents) => {                                // In mongoose, find all students with no criteria and run the callback function. Need to provide object{}
                    if(err) return console.log(err)
                    res.json(allDemStudents)
                })
            },
    show:   (req,res) => {
                Student.findById(req.params.id, (err, thatStudent) => {                    //req.params is the url info. req.body is in the data we're creating
                    if(err) return console.log(err)
                    res.json(thatStudent)
                })
            }, 
    update: (req, res) => {
                Student.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedStudent) => {
                    if(err) return console.log(err)
                    res.json(updatedStudent)
                })
            },
    destroy: (req, res) => {
                Student.findByIdAndRemove(req.params.id, (err, studentDeleted) => {
                    if(err) return console.log(err)
                    res.json("Student deleted")
                })
            }
}