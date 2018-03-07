
function reverseNumber(n) {
    if (n === Number(n)){
        var rev =  n.toString().split("").reverse().join("")
        return Number(rev)
    }else {
        return "Input must be a number"
    }
}
// console.log(reverseNumber(12345))
console.log(reverseNumber("yay"))


//  if (typeof num !== 'number')
// if (isNaN(n))