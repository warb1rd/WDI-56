import React, { Component } from 'react';
import './App.css';
import Modal from "./Modal"                                                                   //This import will use a file named index.js inside of this folder

const myTitle = "Yoda"
const myBody = "hard to see the dark side is"


class App extends Component {

  constructor() {
    super()
    this.state = {
      secondsOpen: 0,
      showModal: false                                                                        //When app is loaded, modal is not seen
    }
  }
  componentDidMount(){                                                                        //App runs when page is loaded (or refreshed)
    console.log("App component mounted")
}

  handleShowModalClick(){                                                                     // This function becomes a property of the class
    this.setState({
      showModal: true
    })

    this.secondsTimer = setInterval(() => {
      this.setState({
        secondsOpen: this.state.secondsOpen + 1
      })
    }, 1000)
    // setTimeout(this.handleHideModalClick.bind(this), 1000)                                 // Closes after 1 sec. App closes the modal. Only in this app is the modal closing in time given.
  }

  handleHideModalClick(){
    this.setState({
      showModal: false
    })
    clearInterval(this.secondsTimer)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleShowModalClick.bind(this)}>Show Modal</button>             {/* without bind, react doesn't know what 'this' is. so bind creates a new version of the handleShowModalClick method and when accessing inside the method, it shows what'this' is*/}  
        {this.state.showModal &&  (
        <Modal 
        onClose={this.handleHideModalClick.bind(this)}
        modalTitle={this.state.secondsOpen}
        modalBody={myBody}
        />                                                                                    /*Conditionally show the modal without using if statements (cannot use if inside return) */
        )}
      </div>
    );
  }
}

export default App;

/* <button onClick= {()=>{this.handleShowModalClick()}}>Show Modal</button>         //This works without bind(this) */
// Bind must be used when trying to access this from inside function

// {this.state.showModal &&  <Modal onClose={this.handleHideModalClick.bind(this)}/>}                                              {/*Conditionally show the modal without using if statements (cannot use if inside return) */}  
