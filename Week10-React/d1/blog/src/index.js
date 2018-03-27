import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"


const rootDiv = document.querySelector("#root")                                             //Element we want to append the app to

//Takes HTML(JSX), and renders it on page
ReactDOM.render(<App/>, rootDiv)                                                            //The 2 arguements - What we want to render and where we want to render