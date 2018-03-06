Rails.application.routes.draw do

  root "works#index"

  get "/works" => "works#index",as: :quotes

  get "works/new" => "works#new" 

  get "works/:id" => "works#show" ,as: :quote

  post "/works" => "works#create"

  get "works/:id/edit" => "works#edit" 

  patch "works/:id" => "works#update"

  delete "works/:id" => "works#destroy"

end


