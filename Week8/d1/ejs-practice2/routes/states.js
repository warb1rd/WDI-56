const express = require("express")
const statesRouter = new express.Router()
const statesCtrl = require("../controller/states.js")

statesRouter.get("/", statesCtrl.index)
statesRouter.post("/", statesCtrl.create)

statesRouter.get("/:id/edit", statesCtrl.edit)

statesRouter.get("/new", statesCtrl.new)

statesRouter.get("/:id", statesCtrl.show)
statesRouter.patch("/:id", statesCtrl.update)
statesRouter.delete("/:id", statesCtrl.destroy)

module.exports = statesRouter




