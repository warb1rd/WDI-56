# REVERSE NUMBER

# p "Enter a number"
# input = gets.chomp

# def reverse_number(number)
#     @number = number.reverse!.to_i
#     puts @number.class
#     if @number.class != Integer
#         p "Input must be a number."
#         p "Enter another number"
#         input = gets.chomp
#         reverse_number(input)
#     end
#     return @number
# end
# p reverse_number(input)
#----------------------------------------------------------------
def rev_num(num)
    num_arr = []
    num_str = num.to_s
    i = num_str.length - 1
    while i >= 0
        num_arr.push(num_str[i])
        i -=
    end
    p num_arr.join.to_i
end
rev_num(12345)

#----------------------------------------------------------------
# COUNT BY X


# def count(number, times)
#     number_count = []

#     @number = number
#     @times = times
#     for i in 1..@times    
#         i = i + @number
#         @number + @times
#         i.push(number_count)
#     end
#     end
# p count(5, 20)
#----------------------------------------------------------------
# def count(number, times)
#     i = 1
#     number_count = []
#     @number = number
#     while i <= times
#         number_count.push(number)
#         number += @number
#         i += 1
#     end 
#     p number_count 
# end
# count(3,10)

#----------------------------------------------------------------
# FIZZ BUZZ

# def fizzbuzz
#     for i in 0..100 do
#         yield(i)
#     end
# end

# fizzbuzz do |i|
#     if i % 3 == 0 && i % 5 == 0
#         p "FizzBuzz"
#     elsif i % 5 == 0
#         p "Buzz"
#     elsif i % 3 == 0 
#         p "Fizz"
#     else 
#         p i
#     end
# end

