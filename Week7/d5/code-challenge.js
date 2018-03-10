// var array = [4, 5, 6, 7];
// const reduceSum = (total, num) => total + num

// // const reduceSum = array => array.reduce((a, b) => a + b)

// console.log(array.reduce(reduceSum));

// function reduceSum(arr){
//     return arr.reduce((a, b) => {
//         return a+b
//     })
// }

// const numAddition = (str) => str.split("").filter(i => !isNaN(i)).reduce((a, b) => parseInt(a) + parseInt(b))

//DOESNT WORK ------------------------------------
function numAddition(str){
    let num = str.split("")
    let array = []
    let sum = 0
    for(var i = 0; i < num.length; i++){
        if("0123456789".indexOf(charAt[i] != -1)){
        }
        sum = array.reduce(parseInt(num[i]))
    }  array.push(num[i])

}
//------------------------------------------------

numAddition("3u7f7x49")