// REQUIRE EXPRESS AND THE CONTROLLER
const express = require("express")
const frameworksRouter = new express.Router
const frameworkCtrl =  require("../controllers/frameworks.js")

//CREATE ROUTES 
frameworksRouter.route("/")
.get(frameworkCtrl.index)
.post(frameworkCtrl.create)

frameworksRouter.route("/:id")

.get(frameworkCtrl.show)
.patch(frameworkCtrl.update)
.delete(frameworkCtrl.destroy)

module.exports = frameworksRouter
