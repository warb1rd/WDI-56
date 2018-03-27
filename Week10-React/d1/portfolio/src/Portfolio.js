import React from "react"
import PortfolioItem from "./PortfolioItem.js"

const portfolio = [
    {title: "Space Invaders", image:"https://flyers.arcade-museum.com/flyers_video/taito/28031001.jpg", description: "This was a really cool first project to build. blah blah lorem ipsum blah blah. Oh my god its only been one line, I need many lines to fill the box up! " },
    {title: "The Cook Book", image:"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1889454/1360/906/m1/fpnw/wm1/izdltg7wkutlfpw5boo8ahl2j5vrdtrj3t7sm0azgnsifwjfbxp9tptowy7lpdn5-.jpg?1479073857&s=2ee09d835d60ef5561cd0597c9626892", description: "Everybody uses this app in the family! " },
    {title: "Vacation Finder", image:"http://www.deepblueview.com/wp-content/uploads/2018/01/Vacation.jpg", description: "Fun time building an app in a team.  Need to write more blah blah to make the text fill up the box." },
]

const Portfolio = () => {
    return (
        <div className="portfolio"> 
            {portfolio.map((portObj, i) =>{
                return <PortfolioItem key={i} portfolio={portObj}/>                                                                             
            })}
        </div>
    )
}

export default Portfolio
