var users = [
    {id: 1 , name: "Batman"},
    {id: 2 , name: "Wolverine"},
    {id: 3 , name: "Hulk"},
    {id: 4 , name: "Spiderman"},

]

var findById = (u, id) => {
    for(var i = 0; i < u.length; i++){  
        if(u[i].id === id){
            return u[i]
        }
      } return null                                 // it'll wait for loop to run its entire course, and if it doesnt find a match, returns null.

}

//// function findById(u, id){
//     return u.find((u) => u.id === id) || null
// }

user = findById(users, 3)
console.log(user)