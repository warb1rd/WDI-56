import React from "react"                                                       //Same as const React = require("react")
import ReactDOM from "react-dom"                                           

const rootDiv = document.querySelector("#root")                                 //Can use document.getElementById()

const Welcome = () => {
    return (
    <h1>My First Component</h1>
    <h2>Heading tag</h2>      
    )

}
ReactDOM.render(<Welcome/>, rootDiv)                                             // This does the first appending in page