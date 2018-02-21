its_sunny_outside = false
im_awake = true
im_hungry = true

# puts "Ready to learn!🤯" unless its_sunny_outside


# user = {name:"sdF", email:"sdfaD"}
# if user[:email] #which is nill if email is not provided.
#     puts "redirect to profile"
# end

# puts "Ready to learn!🤯" if !its_sunny_outside

# ! can be replaced by not

# if its_sunny_outside && im_awake # will be true if original values are both true
#     puts "Ready to learn!🤯"
# else
#     puts "I need to go back to bed.😌"
# end

if its_sunny_outside and im_awake or im_hungry # will be true since && is false and || is true and  false||true = true && gets evaluated first
    puts "Ready to learn!🤯"
else
    puts "I need to go back to bed.😌"
end