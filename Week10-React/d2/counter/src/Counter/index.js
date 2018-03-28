import React from "react"
import Count from "./Count.js"
import Buttons from "./Buttons.js";

class Counter extends React.Component { 
   
    constructor(){
        super()                                                         //Super allows us to use components
        this.state = {                                                  //Its the property of the app.
            count: 0                                                    //THE ONLY TIME WE CAN DECLARE STATE IS IN CONSTRUCTOR of a component
        }                                                               //State can only be modified using this.setState
    }
        handlePlusClick() {
            this.setState({                                             //Its an inbuilt method. Will take old state and merge new one we want to change.
                count: this.state.count + 1
            })          
        }
        handleMinusClick() {
            if(this.state.count >0){
            this.setState({                                             //setStates takes a method which here, will be the count increment
                count: this.state.count - 1
            }) 
        }
    }
    render(){                                                           //In a class, we need render method that returns html
        return(
           
            <div className="App">
                <Count num={this.state.count}/>                    
                <Buttons 
                onPlusClick={this.handlePlusClick.bind(this)}           //this.handlePlusClick is a method
                onMinusClick={this.handleMinusClick.bind(this)}         //.bind returns new version of click method with proper scoping
                />                          
                
            </div>   
        )
    }
}

export default Counter

//State-Describes info in the component that can be changed/tracked. Component can update its state. They're properties that describe what should show
//Props-Can ONLY be fed into components. Cannot be modified inside a component. They're arguments to a function
//Class component MUST have a render method.

// {/* <button onClick={() => {console.log("Clicked!")}}>+</button>             eventhandler */}
//                 {/* <button onClick={this.handlePlusClick.bind(this)}>+</button>                {/*When we need to access "this" component in an event handler, it needs to be bound */}
//                 {/* <button onClick={this.handleMinusClick.bind(this)}>-</button>                */ /*} }*/