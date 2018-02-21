Rails.application.routes.draw do
  root "pages#home"          
  get "/about" => "pages#about"  
  get "/portfolio" => "pages#portfolio"
  get "/contact" => "pages#contact"
  
end
