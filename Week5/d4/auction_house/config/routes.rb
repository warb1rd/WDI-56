Rails.application.routes.draw do

  root "categories#index"

  get "/categories/:id" => "categories#show"

  # get "categories/new" => "categories#new"

  # get "categories/create" => "categories#create"

  # get "categories/:id" => "categories#edit"

  # get "categories/:id/update" => "categories#update"

  # get "/categories/:id" => "categories#destroy"

  get "/items" => "items#index"

  get "/items/:id" => "items#show"

  get "/categories/:id/items/new" => "items#new"    

  post "/categories/:id/items" => "items#create"       

  delete "/items/:id" => "items#destroy"

end
 