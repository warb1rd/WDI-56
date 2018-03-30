import React, { Component } from 'react';                                     //When we import from react package, destructuring{} creates 2 variables we can use 
import './App.css';

class App extends Component {     
  state = {                                                                   //Same as declaring a contructor and super function and this.state= 
    signups: [                                                                //State is a property of a class component. It can only exist in the component
      {name:"Mahi", email: "mahi@gmail.com"},
      {name:"thor", email: "thor@gmail.com"},
      {name:"batman", email: "batman@gmail.com"}, 
    ], 
    // submit: null
  }

  handleFormSubmit(evt){                                                      //Prevents the default action of refreshing the page everytime submit button is clicked inside the form
    evt.preventDefault()
    const { name, email } = this.refs
    const submit = {name:name.value, email:email.value}
    // console.log(name.value)
    this.setState({
      signups: [submit, ...this.state.signups]    
      // submit: [{name:name.value, email:email.value}, ...this.state.signups] //The new inputs that are saved in the submit variable and the hard coded names and emails in signups                         
    })
    name.value = ""
    email.value = ""
    name.focus()                                                              //input has a method called focus that reselects the name input so we don't have to click on the input
    // console.log(this.refs.name.value)
    
  }

  render() {
    const { signups } = this.state                                            //Signups is a property of this.state. We destructure signups. Cannot declare const inside return statement
    return (
      <div className="App">
      <form onSubmit={this.handleFormSubmit.bind(this)}>                      {/*When listening for an event, the handler for that event is given an arguement*/}
        <input ref="name" type="text" placeholder="Name"/>                    {/*Ref lets us access the value of the input.We don't have to manually find value using document.queryselector.React does this automatically using refs*/}
        <input ref="email" type="text" placeholder="Email"/>                  {/*Since button is inside the form tag, it also listens for enter keys instead of just clicking button*/}
        <button>Sign Up</button>
      </form>
      <h3>Number of signups: {signups.length}</h3>
        <ul>
          {signups.map((person, index) => {
            return(
              <li key={index} onClick={()=>{console.log(person)}}>
                {person.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;


//this.state is a property of class component