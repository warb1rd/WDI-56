function questionMarks(q) {
    var x = q.split("")
    for(var i = 0; i < q.length; i++){
        if(!isNaN(q[i])){
            var sum = Number(q[i])
            var questionM = 0
            for(var j = i + 1; j < q.length; j++){
                if(q[j] === "?"){
                    questionM++
                } else if(!isNaN(q[j])){
                    return sum + Number(q[j]) === 10 && questionM === 3
                }
            }
        }
    }
}

console.log(questionMarks("acc7??ssS?3asd9asdsd4"))