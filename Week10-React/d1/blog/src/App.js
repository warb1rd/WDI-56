import React from "react"
import "./App.css"
import Navbar from "./Navbar.js"
import PostsContainer from "./PostsContainer.js";
import courageImage from "./courage.jpeg"                                   //Image rendering in react

const App = () => {
    return(
        <div>
            <Navbar/>
            <img src={courageImage} alt="Courage the cowardly dog"/>
            <PostsContainer/>
        </div>
    )
}

export default App                                                  
