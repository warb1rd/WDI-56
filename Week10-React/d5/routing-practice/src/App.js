import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './views/Home.js';
import Contact from './views/Contact.js';
import Portfolio from './views/Portfolio.js';
import FunFacts from './views/FunFacts.js';
import { Route, Link, NavLink as RouterNavLink, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (

      <div className="App">
      <div>
        <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
             <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="" navbar>
              <NavItem>
                  <NavLink tag={RouterNavLink} to="/contact">CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/portfolio">PORTFOLIO</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/funfacts">FUNFACTS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/vip">VIP</NavLink>
                </NavItem>
              </Nav>
              </Collapse>
        </Navbar>
      </div>

        <Route exact path="/" component={Home} />                            {/*Where we want to be when this route takes place*/}                                                                               
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/funfacts" component={FunFacts} />
        <Route path="/vip" render= {() => {
          const loggedIn = false
          if(!loggedIn) return <Redirect to="/"/>
            return <h1>You're a VIP. Welcome</h1>
        }} />
        
      </div>
    );
  }
}

export default App;
