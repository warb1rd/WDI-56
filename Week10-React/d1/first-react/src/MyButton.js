import React from "react"                                                       

//We're adding custom attribute that we can use from inside this function. 
const MyButton = (props) => {                                                       // Using JS to build HTML functionally.
    console.log(props.baba)                                                         //One for each of the components that got rendered.
    return <button>{props.label}</button>   
}

export default MyButton

//{} is like <%%> in JSX. interpolating js value