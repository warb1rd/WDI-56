Rails.application.routes.draw do

  get "/" => "pages#home"

  get "/log_in" => "pages#log_in"

  get "/sign_up" => "pages#sign_up"

  get "/customer_profile" => "pages#customer_profile"

  get "/men" => "pages#men"

  get "/women" => "pages#women"

  get "/vip" => "pages#vip" 

  get "/edit_profile" => "pages#edit_profile"
  
  get "/contact" => "pages#contact"

end 
