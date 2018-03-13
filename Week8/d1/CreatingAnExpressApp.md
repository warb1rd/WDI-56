####CREATING A CRUD EXPRESS APP
--
**IN TERMINAL**

1. Create app folder and npm init inside it
2.	npm install --save <necessary packages>
3. Create MODEL, ROUTER, CONTROLLER, VIEWS folders. 
4. Create an index.js file in root of app directory.

**IN VSC**

1. In index.js file, require installed packages----eg.express, mongoose, axios(if using api), body-parser, esj, express-esj-layouts, morgan, methodOverride(facilitates requests like patch and delete)
2. app.listen on port & mongoose.connect (MongoDB)
3. app.use the middleware packages
4. app.set views path and views engine on ejs.
5. In models directory - create <Appname.js> file.
	- Require mongoose
	- Create a new <app>Schema with objects
	- Register model-name in <app> declared as const.
	- Export const using modules.export
6. In controller directory- create <appnames.js> file.
	- Require the path for <appname> from models.
	- Module.exports the 7 paths (index, show, create...).

7. Create layout.ejs in views directory. Add doctype & <%- body %>.
8. Create a router file in the directory.
	- Require express 
	- Create <appname>Router using new express.Router()
	- Require <appname> controller
	- Create paths for all 7 CRUD actions:eg <appname>Router.patch("/:id",<appname>Ctrl.update)
	- modules.exports <appname>router
9. In INDEX.JS in root directory, require path to states routes.
	- app.use(/<appname>, <appname>Router)
If at this point there's an error, comment out the destroy path.
10. Create a new view in views folder (used input tags). 
	- Render the view in controller using res.render(path)
	- Save and redirect in create object using <appname>.create.
11. Create index view and show view and update the controller simultaneously.



	

