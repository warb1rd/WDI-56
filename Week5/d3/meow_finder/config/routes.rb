Rails.application.routes.draw do

  root "kittens#index"                                #Will be responsible to kittens homepage
  
  get "/kittens" => "kittens#index"                   #Get lists the kittens and post creates(adds) new kittens

  get "/kittens/new" => "kittens#new"                 #Couldn't find Kitten with 'id'=new. order of routes matter so moved new to above show

  get "/kittens/:id" => "kittens#show", as: :kitten   #Shows the details of specific kitten. Shows a path alias (as::kitten)

  post "/kittens" => "kittens#create"                 #Run the kittens create action
  
  get "kittens/:id/edit"  => "kittens#edit"           #Goes to the edit html page

  patch "kittens/:id" => "kittens#update"             #Sends a patch request

  delete "kittens/:id" => "kittens#destroy"       

end
