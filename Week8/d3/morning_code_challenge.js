var myObj = {boom: "banana"}
var clonedObj = clone(myObj)


// function clone(obj){
//     var clonedObj = Object.assign({}, obj);
//     return clonedObj
// }
function clone(obj){
    var result = {}
    for(key in obj) {                                   //go through each key in the obj
        result[key] = obj[key]                          // creates a new key and adds value from obj
    }
}


// function clone(){
//     return {...obj}                                     //shortcut to cloning - SPREAD operator
// }


// arrays.concact()

// var flavors = ["vanilla", "mint", "chocolate"]
// kidsFlav = ["strawberry", ...flavors]                   //cloning the flavors obj and adding more flavors
