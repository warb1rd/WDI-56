import React from "react"

export default (props) => {
   return( 
       <div>
            <button onClick={props.onPlusClick}>+</button>                 
            <button onClick={props.onMinusClick}>-</button>                 
       </div>
    )
}

//onClick is not an attribute but a component that react translates to event listener

