
# def plays_banjo?(name)
#         @name = name
#     if @name[0].include?("r") || @name[0].include?("R")
#         puts @name + " plays banjo."
#     else 
#         puts @name + " does not play banjo."
#     end
# end

# p plays_banjo?("rose")

#----------------------------------------------------------------------------------------

# def vowel_count(user_input)
#     @user_input = user_input
#     @vowel = 0
#     i = 0
#     while i < user_input.length

#         if @user_input[i] == "a" || @user_input[i] == "e" || @user_input[i] == "i"  || @user_input[i] == "o" || @user_input[i] == "u"
#             @vowel = @vowel + 1        
#         end
#         i = i + 1
#     end
#     return @vowel
#     if @vowel == 0
#         puts "you have no vowels"
#     end
# end
# p vowel_count("may the force be with you")

#----------------------------------------------------------------------------------------

# def palindrome(word)
#     @word = word.split(" ").join("")
#     if @word == @word.downcase.reverse
#         p true
#     else
#         p false
#     end
# end

# palindrome("was it a rat i saw")

#----------------------------------------------------------------------------------------
# if @user_input[i] == "a" || @user_input[i] == "e" || @user_input[i] == "i"  || @user_input[i] == "o" || @user_input[i] == "u"

# num = @user_input.scan(/[aeiou]/).count

#----------------------------------------------------------------------------------------

# vowels = gets.chomp.downcase
# vowel_count = chars.count ("aeiou") will count the aeiou and return number of vowels

#----------------------------------------------------------------------------------------
def palindrome (input)
    @input = input.split(” “).join(“”)
    p @input == @input.downcase.reverse
end

palindrome("was it a rat i saw")

