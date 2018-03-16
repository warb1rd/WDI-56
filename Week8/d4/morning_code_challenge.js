function dashInsert(str) {
    var x = str.toString().split("")
    
    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 !== 0 && x[i+1] % 2 !== 0 && x[i+1] !== undefined){
            x[i] = x[i] + "-"
        }
    }
    return x.join("")

    // return str.split('').map((d, i, arr) => d % 2 && arr[i + 1] % 2 && arr[i + 1] !== undefined ? d + '-' : d).join('')
}

console.log(dashInsert("12345569789"))