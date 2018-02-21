Rails.application.routes.draw do
  root "books#index"
  get "/books" => "books#index"
  get "/books/:id" => "books#show"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
