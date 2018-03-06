function diameter(radius){
    return radius * 2
}

function circumference(radius){
    return diameter(radius) *  Math.PI
}

function circleArea(radius){
    return  Math.PI * (radius * radius)
}

// Have to declare module.exports- If this file is called somewhere else, these key value pairs would be available. If we don't declare diameter, it wont be available in other places, but area acn circumference would.  
module.exports = {                                      // Exports this file to other files that calls this. There can only be 1 module.exports in a file.
    diameter: diameter ,                                // creating a key-value pair.
    circumference: circumference,
    circleArea: circleArea
}                                 
