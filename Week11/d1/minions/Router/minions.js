const express = require("express");
const minionsRouter = new express.Router();
const minionsCtrl = require("../Controller/minions.js");

minionsRouter.get("/", minionsCtrl.index)
minionsRouter.post("/", minionsCtrl.create)

minionsRouter.get("/:id", minionsCtrl.show)
minionsRouter.patch("/:id", minionsCtrl.update)
minionsRouter.delete("/:id", minionsCtrl.destroy)

module.exports = minionsRouter

