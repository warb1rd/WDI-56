
//CREATE NEW STUDENT
// app.post("/api/students", (req, res) => {
//     const newStudent = new Student()
//     newStudent.name = req.body.name
//     newStudent.age = req.body.age
//     newStudent.enrolled = req.body.enrolled
//     newStudent.save((err, brandNewStudent) => {
//         if(err) return console.log(err)
//         res.json({success: true, message:"Student created!"})
//     })
// })



//UPDATE STUDENT
// app.patch("/api/students/:id", (req, res) => {
//     Student.findById(req.params.id, (err, thatStudent) => {                   // Unless specified, mongoose does $set under the hood.
//     thatStudent.name = req.body.name
//     thatStudent.age = req.body.age
//     thatStudent.enrolled = req.body.enrolled
//     thatStudent.save((err, updatedStudent) => { 
//         if(err) return console.log(err)
//         console.log(updatedStudent)
//         })
//     })
// })
