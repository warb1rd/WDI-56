import React, { Component } from 'react';
import './App.css';
import Modal from './Modal'



class App extends Component {
  constructor(){
    super()
    this.state = {
      heroes: [{
          _id: 1, 
          name: "Batman", 
          about:"The greatest detective in the universe"
        },
        {
          _id: 2, 
          name: "Samwise Gamgee", 
          about:"The true hero who helped Frodo carry the burden of the world"
        },
        {
          _id: 3, 
          name: "All dogs", 
          about:"They're cool"
        },
      ],
      showModal: false,
      hero: {},
      modalClass: ""
    }
  }

  selectHero(hero){                                                                                   //hero is the h in map
    console.log(hero)
    this.setState({
      showModal: true,
      hero: hero
    })
  }

  hideModalClick(){
    setTimeout(()=>{
      this.setState({
        showModal: false,    
        modalClass: "exiting"
      })
    })
  }

  render() {
    return (
    
      <div className="App">
      <h2>HEROES</h2>
     
      {this.state.heroes.map((h) => {                                            
          return(
            <div key={h._id} >
              <p onClick={()=> {this.selectHero(h)}}>{h.name} </p>
              {/* <button onClick={()=> {this.selectHero(h)}}>{h.name} </button> */}
            </div>
          )
        })}
        

      {this.state.showModal && (
        <Modal                                                                                      //Only want to show model if state says to.
        modalTitle={this.state.hero.name}           
        modalBody={this.state.hero.about}
        onClose={this.hideModalClick.bind(this)}                                                    //hideModalClick is not a part of state so no this.state.hide....
        />
      )}
      </div>
     
    );
  }
}

export default App;
 