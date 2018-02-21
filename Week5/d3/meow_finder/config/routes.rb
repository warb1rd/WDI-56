Rails.application.routes.draw do

  root "kittens#index"              #will be responsible to kittens homepage
  
  get "/kittens" => "kittens#index"

  get "/kittens/new" => "kittens#new"       #Couldn't find Kitten with 'id'=new. order of routes matter so moved new to above show

  post "/kittens" => "kittens#create"       #run the kittens create action

  get "/kittens/:id" => "kittens#show"





end
