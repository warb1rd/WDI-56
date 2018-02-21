# class Array 
#     def backwards_each
#       i = self.length - 1 
#       while i >= 0 do
#         yield(self[i])                        
#         i -= 1
#       end
#     end
# end

# flavors = ["strawberry", "mint", "dulce de leche"]
# flavors.backwards_each do|flavor|
#     p flavor
# end

class Integer
    def my_times

        # for i in 0 ... self do              # can also do for loop, but it only increments by 1. cannot use it for increments by 2 or more
        #     yield
        # end

        i = 0
        while i < self do                     #self here, is the object that calls the method in line 26
            yield                             # only if you want something available to you in the block do you need to put (i)
            i += 1
        end
    end
end

4.my_times do
    p "qwerty"
end


# flavors.each do |flavor|
#         puts flavor.upcase.reverse
#     end

# def jump_around
#     puts "Getting ready to jump around"
#     yield
#     puts "END of the function"
# end

# jump_around() do
#     puts "JUMP UP JUMP UP AND GET DOWN"
# end


