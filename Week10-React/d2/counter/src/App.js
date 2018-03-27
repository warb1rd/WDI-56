import React from "react"
import Counter from "./Counter"                                 // Renamed the counter.js file to index.js in counter folder. index.js is the promary file.

class App extends React.Component {                             //Inherit properties and methods from the react package called component
  
    // handlePlusClick() {
    //     this.setState({                                        //Its an inbuilt method. Will take old state and new one we want to change and merge.
    //         count: this.state.count + 1
    //     })          
    // }
    // handleMinusClick() {
    //     if(this.state.count >0){
    //     this.setState({                                        //setStates takes a method which here, will be the count increment
    //         count: this.state.count - 1
    //     }) 
    // }
    // }
    render(){                                                   //onClick attribute in buttons
        return(                         
           <div className="App">
            <h2>Counter App</h2>
            <Counter/>
            <Counter/>
           </div>
        )
    }
}

export default App

//React is UI built components that have the ability to dynamically build views
//UI reacts to changes in the app's state