Rails.application.routes.draw do

  root "users#index"

  resources :users 
  
  resources :posts


  resources :sessions, only: [:new, :create]

  delete "/logout" =>  "sessions#destroy", as: :logout   #if someone sends a delete request in logout, it'll do the action destroy
  

  # resources :bananas, only: [:index, :show]  #doesn't create entire 7 routes. Only creates index and show.

  # resources :bananas, except: [:index, :show]  #creates everything except index and show.
  
  # resources :categories, only [:index, show] do        # For nested resources
  #   resources :items
  # end

end
