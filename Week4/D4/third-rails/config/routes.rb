Rails.application.routes.draw do
  root "pages#home"           #go into pages controller and serve home action page
  get "/contact" => "pages#contact"  
end                                   # home is the action

# shortcut for get "/" is root