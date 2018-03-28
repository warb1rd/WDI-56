import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {                                                                      //This is the initial state.
      quotes: [
        {
          body: "You shall not pass",
          author: "Gandalf"
        },
        {
          body: "Hard to see the dark side is",
          author: "Yoda"
        },
        {
          body: "By the power of grayskull",
          author: "Adam"
        },
        {
          body: "The wound is the place where the Light enters you",
          author: "Rumi"
        },
        {
          body: "What's a motto. Nothing, what's a motto with you?",
          author: "Pumba and simba"
        },
        {
          body: "A wizard is never late, nor is he early, he arrives precisely when he means to",
          author: "Peter Jackson"
        },
        {
          body: "One Ring to rule them all, One ring to find them; One ring to bring them all and in the darkness bind them",
          author: "Sauron"
        },
        {
          body: "In brightest day, in blackest night, No evil shall escape my sight Let those who worship evil's might, Beware my power, Green Lantern's light",
          author: "Hal Jordan"
        },
        {
          body: "You don't know fear half as well as it knows you",
          author: "Batman"
        },
        {
          body: "when you have eliminated the impossible, whatever remains, however improbable, must be the truth",
          author: "Holmes"
        },
      ],
     randomQ: 0
    }
  }

  randomQuote() {
    var random = Math.floor(Math.random()*(this.state.quotes.length))
    this.setState({                                                                                 //Change the state of component randomNum to the randomly generated index number of the quotes
        randomQ: random
    })
  }

  render() {
    return (                                                                                        // render function must always have a return statement
      <div className="App">
      <h1>RANDOM QUOTE PICKER</h1>
      <h2>{this.state.quotes[this.state.randomQ].body}</h2>
      <p>{this.state.quotes[this.state.randomQ].author}</p>
      <button onClick={this.randomQuote.bind(this)} class="button">Generate a quote</button>
      </div>
    );
  }
}

export default App;
