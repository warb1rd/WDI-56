class PagesController < ApplicationController
  def home
    @flavors = [
      {id: 1, name: "Chocolate", manufacturer: "Ben & Jerry's"},
      {id: 2, name: "Strawberry", manufacturer: "Dreyer's"} ,
      {id: 3, name: "Butterscotch", manufacturer: "Haagen Dazs"} 
    ]
  end

  def about
  end

  def contact
  end
end
