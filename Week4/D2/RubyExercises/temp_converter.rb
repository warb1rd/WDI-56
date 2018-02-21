value = ARGV[0].to_f
temp_in = ARGV[1]
temp_out = ARGV[2]
result = 0

def ctof(value)
    value * 9/5 + 32
end

def ftoc(value)
    (value - 32) * 5/9
end

def ctok(value)
    value + 273.15
end

def ktoc(value)
    value - 273.15
end

def ftok(value)
    (value + 459.67) * 5/9
end

def ktof(value)
    (value * 9/5) - 459.67
end


if temp_in == "c" && temp_out == "f"
    result = ctof(value)

elsif temp_in == "f" && temp_out == "c"
    result = ftoc(value)

elsif temp_in == "c" && temp_out == "k"
    result = ctok(value)

elsif temp_in == "k" && temp_out == "c"
    result = ktoc(value)

elsif temp_in == "f" && temp_out == "k"
    result = ftok(value)

elsif temp_in == "k" && temp_out == "f"
    result = ktof(value)

end

puts result
