class PagesController < ApplicationController

    def home
        @title = "Welcome to my home page!"    # use instance variable will be available in the corresponding view template (eg home.html.erb)
        @name = "My name is Mahima."
        @description = "I am a web developer who likes to spend my time tinkering with CSS. This website will showcase my work."
    end 

    def about
        @about = "I am a web developer who likes Ruby!"
    end

    def portfolio
        @title = "My portfolio"  # this wont conflict with the @title instance variable in home method above
        @description = "It was a fun experience to use new technology to remaster a game from the past."

        @portfolio = [
            {   title: "SPACE INVADERS",
                description: "It was a fun experience to use new technology to remaster a game from the past.",
                link: '<a href = "https://warb1rd.github.io/Space_Invaders/"> Play here </a>'
            },
            {   title: "PROJECT 2",
                description: "It was a fun experience to use new technology to remaster a game from the past.",
                link: '<a href = "https://google.com"> Play here </a>'
            },
            {   title: "PROJECT 3",
                description: "It was a fun experience to use new technology to remaster a game from the past.",
                link: '<a href = "https://google.com"> Play here </a>'
            }
        ]
    
    end

    def contact
        @email = "Write to me : ruby@rails.com" 
        @phone = "Call me : 1234567890"
        
    end
   

    #@logged_in = false

   
    
end