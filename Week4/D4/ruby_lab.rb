# Factorial
# using - condition ? if_true : if_false

# def first_factorial(n)
#     n > 1 ?  n * first_factorial( n - 1 ) : 1
# end
#   p first_factorial(4)

#------------------------------------------------------
# class Sentence 
#     def secret_message
#     i = self.length - 1 
#     while i < self.length do
#     yield(self[i])                        
#     i += 1
#     end
#     end
# end

   

# def secret_message(string)
#     result = []                             # [*"a".."z"] - shortcut for a b c d ...z
#     i = 0
#     while i <= string.length - 1
#         puts string[i].next
#         i += 1
#     end
#     result.push(string)
#     result
#     return result
# end

def secret_message(string)
    result = string.split('').map do |c|
        c == ' '? ' ' : c.next
    end
     return result.join
end

puts secret_message("may the force be with you")

