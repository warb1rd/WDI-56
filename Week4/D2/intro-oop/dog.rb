
class Dog
    def initialize(nombre, colour, age, nationality)
        @name = nombre
        @color = colour
        @age = age
        @nationality = nationality
        p "I'm alive! says the " + @color + " " + @nationality + " dog"
    end
    
    def age_human_years(human_years)
        @age = human_years * 7
    end

    def bark
        if @nationality == "American"
            p "woof"
        elsif @nationality == "Gaulish"
            p "vuf"
        end
       # p "woof" + " says the " + @nationality + " " + @name
    end

    def change_name(new_nombre)
        @name = new_nombre
    end
end

j_dogg = Dog.new("J Dogg", "brown", 3, "American")
j_dogg.bark
p j_dogg.age_human_years(3)


dogmatix = Dog.new("Dogmatix", "white", 1, "Gaulish")
dogmatix.bark
p dogmatix.change_name("Marmaduke")

p dogmatix.age_human_years(1)

p dogmatix.class

#dogmatix.change_name("Marmaduke")
#dogmatix.bark
#dogmatix.change_name("SnoopDog")
#dogmatix.bark
#dogmatix.change_name("Droopy")
#dogmatix.bark
