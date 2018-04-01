const
  express = require('express'),
  jokesRouter = new express.Router(),                       //going into the express package finding the router constructer and creating a new object
  jokesCtrl = require('../controllers/jokes.js')

jokesRouter.get("/", jokesCtrl.index)
jokesRouter.post("/", jokesCtrl.create)

jokesRouter.get("/new", jokesCtrl.new)
jokesRouter.get("/:id/edit", jokesCtrl.edit)

jokesRouter.get("/:id", jokesCtrl.show)
jokesRouter.patch("/:id", jokesCtrl.update)
jokesRouter.delete("/:id", jokesCtrl.destroy)

module.exports = jokesRouter
 