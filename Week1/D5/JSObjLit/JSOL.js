console.log("mom")

var mother = {
    hairColor: "grey",
    eyeColor : "black",
    bestQuality: "food",
    petPeeve : "chewing noises",
    favoriteFood: "spicy",
};

var father = {
    hairColor: "grey",
    eyeColor : "black",
    bestQuality: "patience",
    petPeeve : "nothing",
    favoriteFood: "sweet",
};

var me = {
    hairColor: mother.hairColor,
    eyeColor : mother.eyeColor,
    bestQuality: father.bestQuality,
    petPeeve : mother.petPeeve,
    favoriteFood: father.favoriteFood,
}