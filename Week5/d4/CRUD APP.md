####TO CREATE A FULL CRUD APP

Create new app folder that uses postgres database in Terminal.
	
	rails new <app_name> --database=postgresql
	cd <app_name>

Inside the new app folder, create a database.

	rails db:create
	
Generate a new model with the keys and their datatypes

	rails generate model <name-singular> title:string image:string actors:string tagline:string
	
Since all the keys are string, no need to add :string after each.
	
Check in VScode <db<migrate if all the keys are correct. Run the db migrate command.
	
	rails db:migrate
	
Generate controller for each action. 

	rails g controller <name-plural> index show new create edit update destroy
	
Check in VScode <config<routes and update the requests using ROOT GET PATCH/PUT POST DELETE.

	"/<name>/:id" or "/<name>/new" etc => "<name>#action"

This is a good time to open the localhost:3000 after entering the rails server from terminal 
		
		rails server  OR rails s
		
Check app<controllers<movies_controller 

Create a few movies from terminal to begin with by first entering the rails console. 

	rails console  OR rails c
	@movie = <Model_name>.new
	@movie.title = ""
	@movie.image = "<url>"
	@movie.actors = ""
	@movie.tagline = ""
	
	@movie.save
	
Save after each entry.

In VScode go to app<views<movies and open each view to add code in it. 





