class Customer
    def initialize (name, account_number, starting_balance=0)
        @name = name
        @account_number = account_number
        @starting_balance = starting_balance
    end

    attr_accessor :starting_balance          
    attr_reader :name          
    attr_reader :account_number

    def withdrawls(w)
        if @starting_balance - w <= 0
            p "You cannot withdraw "
        else
            @starting_balance= @starting_balance - w
            return @starting_balance
        end
    end

    def deposits(d)
       @starting_balance= @starting_balance + d
        return @starting_balance
    end

end
    new_cust1 = Customer.new("mahi", 12345, 1000)
    new_cust1.deposits(50)

    new_cust2 = Customer.new("bahi", 54321)
    new_cust2.withdrawls(55)

    new_cust3 = Customer.new("shahi", 32154, 350)
    new_cust3.withdrawls(100)
    
    
#    @starting_balance == 0 && w > @starting_balance
