class Human 
    def initialize(name, hair_color, programmer, languages, programming_languages=[])
        @name = name
        @hair_color = hair_color
        @programmer = programmer
        @languages = languages
        @programming_languages = programming_languages
    end

    def say_hi
        p "Hi, my name is " + @name
        p @programmer
        
    end

    def prog_lang
        p "I speak " + @languages.join + "and I also know " + @programming_languages.join
    end

    def what_languages_do_you_know
        p "I speak " + @languages.join
    end

    def are_you_a_programmer
        if @programmer == true
          prog_lang
        elsif @programmer == false 
           what_languages_do_you_know
        end
    end
end

mahi = Human.new("mahi", "brown", true, ["English ", "Hindi ", "Tamil "], ["HTML ", "CSS ", "Javascript "])
mahi.say_hi
mahi.are_you_a_programmer

bahi = Human.new("bahi", "blue", false, ["Portugese ", "Spanish "])
bahi.say_hi
bahi.are_you_a_programmer

shahi = Human.new("shahi", "black", true, ["English ", "Hebrew"], ["HTML ", "CSS ", "Ruby"])
shahi.say_hi
shahi.are_you_a_programmer

