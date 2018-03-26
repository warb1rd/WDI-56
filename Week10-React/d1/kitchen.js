var kitchen = {
    lightsOn: true,
    sink: [
        {type:"Plate", clean:false},
        {type:"Bowl", clean:false},
        {type:"Spoons", clean:false}
    ],
    dishWasher: [

    ]
}
//Its purpose is to build a brand new room with lights already off. It's not toggling lights.

function toggleLights(state){                                                       //Provide the function with the state object (room)
    return Object.assign({}, state, {                                               //First arguement in Object.assign is a new object second arguement is the keys from original state and new values
        lightsOn: !state.lightsOn                                                   //Returns a brand new kitchen and lights on will be whatever it was NOT before
    })
}

function fillDishWasher(state){                                                     //Not modifying, but creating new state  
    return Object.assign({}, state, {                                               //Returning a new object that contains everything from the old state (kitchen) with new properties
        sink:[],
        dishWasher:[...state.sink]                                                  // ... is spreading operator that creates a clone of original sink but has no ties to it. 
    })
}

function runDishWasher(state){
    return Object.assign({}, state, {
        dishWasher: state.dishWasher.map((dish) => {                                //Build a new array with new properties. MAP CREATES A NEW ARRAY BASED ON OLD ARRAY
            return Object.assign({}, dish, {clean: true})                           //Borrowing keys from old dish and changing the value of clean to true
        })  
    })
}

console.log("KITCHEN V1")
console.log(kitchen)

const kitchen2 = toggleLights(kitchen)
console.log("KITCHEN V2")
console.log(kitchen2)

const kitchen3 = fillDishWasher(kitchen)
console.log("KITCHEN V3")
console.log(kitchen3)

const kitchen4 = runDishWasher(kitchen3)                                            // Version 3 has a full dishwasher V1 doesn't.
console.log("KITCHEN V4")
console.log(kitchen4)


// React works when you compare old and new objects. It rebuilds parts of the DOM that needs to change vs changing the entire DOM