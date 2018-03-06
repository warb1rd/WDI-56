class KittensController < ApplicationController
  def index
    #all kittens
    @kittens = Kitten.all #.sort or .order                # Plural because its a collection of all kittens in our database
  end                                                     # Sorts it by recently updated
    
  def show                                                # Specific kitten
    @kitten = Kitten.find(params[:id])
  end

  def new                                                 # Empty kitten object for the form
    @kitten = Kitten.new
  end

  def create                                              # Create a new kitten object, with form data

    @kitten = Kitten.new
    @kitten.name = params[:kitten][:name]
    @kitten.birthdate = params[:kitten][:birthdate]
    @kitten.image_url = params[:kitten][:image_url]
    @kitten.save                                          # Save to database
  
    redirect_to("/kittens/#{@kitten.id}")                 # When save button is clicked, 

  end

  def edit
    @kitten = Kitten.find(params[:id])                   # Finds the kitten we want to edit
  end

  def update

    @kitten = Kitten.find(params[:id])
    @kitten.name = params[:kitten][:name]
    @kitten.birthdate = params[:kitten][:birthdate]
    @kitten.image_url = params[:kitten][:image_url]
    @kitten.save 

    redirect_to("/kittens/#{@kitten.id}") 

  end

  def destroy

    @kitten = Kitten.find(params[:id])
    @kitten.destroy
    redirect_to("/kittens") 

  end
end
