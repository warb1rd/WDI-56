Rails.application.routes.draw do

  #get 'pages/home' alternative version to "pages#home"

  # get 'pages/about' get "/about" => "pages#about" is a better way of writing

  get "/about" => "pages#about" 

  get "/contact" => "pages#contact"

  root "pages#home"

end
