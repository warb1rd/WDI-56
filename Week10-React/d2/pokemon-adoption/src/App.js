import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      abandoned: [
        { _id: 1234, name: "Pikachu", imageUrl: "https://goo.gl/RSMTxH" },
        { _id: 5678, name: "Geodude", imageUrl: "https://goo.gl/mG1oPY" },
        { _id: 9123, name: "Exeggutor", imageUrl: "https://goo.gl/Jkfre1" },
        { _id: 4567, name: "Pikipek", imageUrl: "https://goo.gl/CD59CV" },
        { _id: 8912, name: "Minior", imageUrl: "https://goo.gl/P6rE1u" },
        { _id: 3456, name: "Mudbray", imageUrl: "https://goo.gl/dBBz8s" },
        { _id: 7891, name: "Muk", imageUrl: "https://goo.gl/49dND6" },
        { _id: 2345, name: "Guzzlord", imageUrl: "https://goo.gl/f4Pb6k" }
      ],
      adopted: []
    }
  }
adoptPokemon(pokemon) {
  this.setState({                                             
    abandoned: this.state.abandoned.filter((p)=> {
      return p._id !== pokemon._id                                                  //If this returns truthy value, it will not add it to the adopted array
    }),                                                                             //.filter will match 
    adopted: [...this.state.adopted, pokemon]                                       // second argument for the spread is the pokemon we want to add
  }) 
}

abandonPokemon(pokemon) {
  this.setState({                                             
    adopted: this.state.adopted.filter((p)=> {
      return p._id !== pokemon._id                                                  //If this returns truthy value, it will not add it to the adopted array
    }),                                                                             //.filter will match 
    abandoned: [...this.state.abandoned, pokemon]                                       // second argument for the spread is the pokemon we want to add
  }) 
}

  render() {
    return (
      <div className="App">
      <div className="abandoned">
      <h2>Abandoned Pokemon:{this.state.abandoned.length}</h2>
  
      {this.state.abandoned.map((p)=>{                                              //p is this.state.abandoned
        return( 
          <div key={p._id} >
            <img onClick={()=> {this.adoptPokemon(p)}} src={p.imageUrl} alt={p.name}/>
            <p>{p.length}</p>
            <p>{p.name}</p>
          </div>
        )
      })}
      </div>

      <div className="adopted">
      <h2>Adopted Pokemon:{this.state.adopted.length}</h2>
      {this.state.adopted.map((p)=>{                                    //p is this.state.abandoned
        return( 
          <div key={p._id} >
            <img onClick={()=> {this.abandonPokemon(p)}} src={p.imageUrl} alt={p.name}/>
            <p>{p.name}</p>            
          </div>
        )
      })}
      </div>
      </div>
    );
  }
}

export default App;
