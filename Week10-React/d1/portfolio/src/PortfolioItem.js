import React from "react"

const PortfolioItem = (props) => {
    return (
        <div className="portfolioItem"> 
            <img src={props.portfolio.image} alt={props.portfolio.title}/>
            <h3>{props.portfolio.title}</h3>            
            <p>{props.portfolio.description}</p>
        </div>
    )
}

export default PortfolioItem
