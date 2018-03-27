import React from "react"                                                       //Same as const React = require("react")
import ReactDOM from "react-dom"                                                // We import dom only once when getting render started   
import App from "./App.js"

const rootDiv = document.querySelector("#root")                                 //Can use document.getElementById()

//Component called Welcome
// const Welcome = () => {
//     return (                                                                    // Everything inside the welcome component must be inside one parent(component) tag, like div
//     <div> 
//         <h1>My First Component</h1>
//         <h2>Heading tag</h2>      
//     </div>
//     )
// }
// //Component called Contact
// const Contact = () => {                                                         // Build component that's incharge of rendering 
//     return (
//         <div>                                                                   
//             <h2>Mahi</h2>
//             <p>Phone: 1234567890</p>
//             <p>Email: m@m.com</p> 
//         </div>
//     )
// }
                                                                                //In browser console, react tells us that welcome variable is declared but not used. To keep code DRY
ReactDOM.render(<App/>, rootDiv)                                                // This does the first appending in page


//Component is function that tells react what screen should contain in a dom