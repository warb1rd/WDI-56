Rails.application.routes.draw do

  root "dweeds#index"

  get "/dweeds" => "dweeds#index" 

  get "/users/:id/dweeds/new" => "dweeds#new"       #Creating a new dweed, not user but dweed needs to be from a specific user(id)

  post "/users/:id/dweeds" => "dweeds#create"       

  delete "/dweeds/:id" => "dweeds#destroy"          # Somebody sends a delete request on dweeds id.



end
