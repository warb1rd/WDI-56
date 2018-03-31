import React, { Component } from 'react';
import Home from './views/Home.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import { Route, Link, Redirect } from 'react-router-dom';                                     //Client-side Route
//If there's a redirect component in the app, then it will render.

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="NavBar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/vip">VIP</Link>
        
      </div>
        <Route exact path="/" component={Home} />                            {/*Where we want to be when this route takes place*/}                                                                               
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/vip" render= {() => {
          const loggedIn = false
          if(!loggedIn) return <Redirect to="/"/>
            return <h1>You're a VIP. Welcome</h1>
        }} />
        
        {/* <Route path="/contact" render={() => {
          return <h3>footer</h3>
        }}/> */}
      </div>
    );
  }
}

export default App;

// Every route contains '/' in client side routing. We will always see the home componenet even in /about or /contact
// Exact makes it so the route only renders when the url is on / and nothing else.
//ALlows us to replace <anchor tags> and replaces it with components that keeps us on the same page but switches router
//ANOTHER WAY OF RENDERING COMPONENT USING RENDER PROP
//  <Route exact={true} path="/" render={()=>{
// return <Home /> 
// }} /> 

// exact={true} = another way of showing exact has to be true for path.