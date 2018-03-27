import React from "react"
import "./App.css"

const Navbar = () => {
    return(
        <ul className="NavBar">
            <li label="home">HOME</li>
            <li label="posts">POSTS</li>
            <li label="about">ABOUT</li>               
            <li label="contact">CONTACT</li>
        </ul>
    )
}

export default Navbar    

//Whole idea of using components is so we reuse them