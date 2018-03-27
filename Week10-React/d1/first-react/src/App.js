import React from "react"                                                       
import MyButton from "./MyButton.js"

const App = () => {
    return (                                                        // We call the prop/attribute label. We could call it anything
        <div>
            <h1> My first React App</h1>    
            <MyButton label="Submit" baba="banana"/>                     
            <MyButton label="Update"/>                         
            <MyButton label="Delete"/>                         
        </div>
    )
}
//name the attribute label here and call it in mybutton.js as props.
export default App                                                  // Just like module.exports = App