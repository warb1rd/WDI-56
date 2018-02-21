pets = [
  {
    name: "Steve",
    type: "dog",
    age: 5
  },
  {
    name: "Calvin",
    type: "snake", 
    age: 2
  }
]
"My #{pets[1][:type]} 's name is #{pets[1][:name]}"

pets.each do |pet|
    puts pet[:age] + 1  
end

#-----------------------------------------------------------------------------------

fruits = ["apple", "banana", "orange", "strawberry", "mango"]
puts fruits[0], fruits[2], fruits[3], fruits[4]

names = ["john", "jane", "jill", "jack", "joan"]
puts names.last 
names[names.length-1]

#-----------------------------------------------------------------------------------

friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"]
friends.sort!
friends.push("Janice")
friends.sort!
friends.delete("Janice")

me = {
    name: "mahi", 
    age: 33,
    hobbies: ["sl", "eat", "hi"],
    likes_pizza?: true
}

me[:birthday]= "23 march"
me[:name]= "ma"
me.delete(:age)
me[:hobbies].delete me[:hobbies].last

#-----------------------------------------------------------------------------------

hash = {
    :a == 100, 
    :b == 200, 
    :c == 300, 
    :d == 400
}

hash.each {|key, value| puts "#{key} is #{value}" }

hash.each do |hashh|
    puts hashh[:a] + 50
end 
