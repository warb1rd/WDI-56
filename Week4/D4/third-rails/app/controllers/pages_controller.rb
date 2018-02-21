class PagesController < ApplicationController
    def home
        @title = "This is the home page!"    # use instance variable will be available in the corresponding view template (eg home.html.erb)
        @description = "This is the description of the page."
    end 

    def contact
        @title = "The contact page..."  # this wont conflict with the @title instance variable in home method above

    end

end