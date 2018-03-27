class Animal {                                                              //Parent or SUPER class
    constructor(name){
        this.name = name
        this.alive = true
        this.age = 0
    }
}

class Dog extends Animal{                                                  //To inherit common properties from class Animal. With the super, it will go into the constructor function of the parent class. 
    constructor(name, breed){                                              //Like initialize in ruby. 
        super(name)                                                        //Inside of the constructor, it goes to parents class and runs the super function.
        this.breed = breed
        this.fur = true
        this.eyelids = true
    }
    bark() {                                                               // Method inside a class
        console.log("WOOF!")
    }
}

class Fish extends Animal {                                                // When new Fish/Dog is created, inherit all properties from Animal class.                 
    constructor(name, species){                                            //The only arguements in the function will be ones that will be different for each dog/fish
        super(name)                                                        //Inside of the constructor, it goes to parents class and runs the super function.        
        this.species = species                                             //Keeping the name in the arguements.
        this.gills = true
    }
    gloop() {
        console.log("gloop gloop")
    }
}

var sparky = new Dog("Sparky", "Labrador")
console.log(sparky)
sparky.bark()


var nemo = new Fish("Nemo", "ClownFish")
console.log(nemo)
nemo.gloop()