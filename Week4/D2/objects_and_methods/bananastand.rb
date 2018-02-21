class BananaStand
    def initialize (colour, mr_manager, opened_in=1988, accepts_credit_cards=true)
        @color = colour
        @mr_manager = mr_manager
        @opened_in = opened_in
        @accepts_credit_cards = accepts_credit_cards
    end
    
    
    attr_accessor :color, :mr_manager          #gets and sets

    # attr_reader :color                        #can only read and not write (in terminal)

    attr_reader :opened_in                      #can write but can't read/access(in terminal)
    attr_reader :accepts_credit_cards  
#    def color
#        @color
#    end
#    def color= color_name
#        @color = color_name
#    end
end

bs = BananaStand.new "orange", "GM", 1988

# my_banana_stand = {
#     color: "yellow",
#     opened_in: 1953,
#     mr_manager: "George Michael",
#     accepts_credit_cards: true
# }