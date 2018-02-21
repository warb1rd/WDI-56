class PizzaStand
    def location                      #GETTER METHOD (gets the key)
        @location        
    end

    def location= location_name     #SETTER METHOD (Sets the location)
        @location = location_name
    end
end
    ps = PizzaStand.new
    ps.location = "NY"


    # def color
    #     "yellow"
    # end
    # def opened_in
    #     1953
    # end

    # def mr_manager                      #GETTER METHOD
    #     @manager        
    # end

    # def mr_manager= name_of_manager     #SETTER METHOD (Sets the name of manager)
    #     @manager = name_of_manager
    # end

    # def accepts_credit_cards
    #     true
    # end