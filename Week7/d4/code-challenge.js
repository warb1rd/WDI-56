function filterEvensPlusThree(arr) {
    var newArr = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2){
           newArr.push(arr[i] + 3) 
        }
    }
    return newArr
}

const filterEvensPlusThree = (arr) => arr.filter(num => num % 2).map(x => x + 3)
   

// }
// const num = [];
// const result = num.filter(num => num%2 === 0);

// const map1 = array1.map(x => x + 3);

