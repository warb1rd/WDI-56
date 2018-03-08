const express = require("express")
const studentsRouter = new express.Router()                                     //Express comes with a router constructor function
const studentCtrl = require("../controllers/students-controller.js")

// //ALL STUDENT ROUTES    
// studentsRouter.get("/", studentCtrl.index)   

// //CREATES NEW STUDENT
// studentsRouter.post("/", studentCtrl.create)
    
// //SHOW SINGLE STUDENT
// studentsRouter.get("/:id", studentCtrl.show)

// // UPDATE STUDENT
// studentsRouter.patch("/:id", studentCtrl.update)

// //DELETE STUDENT
// studentsRouter.delete("/:id", studentCtrl.destroy)


//ANOTHER WAY OF WRITING ROUTES
studentsRouter.route("/")
.get(studentCtrl.index)
.post(studentCtrl.create)

studentsRouter.route("/:id")
.get(studentCtrl.show)
.patch(studentCtrl.update)
.delete(studentCtrl.destroy)


module.exports = studentsRouter