Rails.application.routes.draw do
  get  "/"  => "pages#home"           #go into pages controller and serve home action page
  get "/banana" => "pages#banana"     #fires off an action names banana
end

# get = event listener
# "/" = to get to this link
