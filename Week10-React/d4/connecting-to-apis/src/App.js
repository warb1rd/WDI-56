import React, { Component } from 'react';
import httpClient from './httpClient.js';
import UserItem from './UserItem.js';
import './App.css'
import _ from 'lodash';
import {Container, 
        Row, 
        Col, 
        Button, 
        Form, 
        FormGroup, 
        Input } from 'reactstrap';
import NavBar from './NavBar.js'

class App extends Component {
  state = {
    users: []                                                                                                     //renders empty array first because its asynchronous
  }

  componentDidMount(){                                                                                            //Only when componenet mounts, we want to get data from server
    httpClient.getUsers().then((apiResponse) => {                                                                 //getUser(from httpClient.js file) then with server response, do what the function calls for
      const apiUsers = apiResponse.data.users                                                                     //We're running componentDidMount because we don't want users to look at blank pages while the server is sending data
      this.setState({   
        users: apiUsers
      })
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    const { name, email, bio, avatar } = this.refs
    const newUser = {
            name: name.refs.name.value,
            email: email.refs.email.value,
            bio: bio.refs.bio.value,
            avatar: avatar.refs.avatar.value
          }
    httpClient.addUsers(newUser).then((apiResponse) => {                                                            //return statement in httpClient.js addUsers, allows us to use.then.  The newUser arguement is the fields in httpClient.addUser(fields)
      const {data} = apiResponse
      if(data.success){
        this.setState({
          users: [data.user, ...this.state.users]
          })
        }
      })
    name.refs.name.value = ""
    email.refs.email.value = ""
    bio.refs.bio.value = ""
    avatar.refs.avatar.value = ""
  } 

  handleDelete(user){
    httpClient.deleteUser(user).then((apiResponse) => {
      this.setState({
        users: this.state.users.filter((u) => {
              return u._id !== user._id  
        })
      })
    })
  }

  render() {
    // var arrays = [], size = 4
    // for(let i = 0; i < this.state.users.length; i += size){
    //   arrays.push(this.state.users.slice(0, size))
    // }
    // while(this.state.users.length > 0){
    //   arrays.push(this.state.users.slice(0, size))   //pushing slice of the original user array
    // }
    // console.log(arrays)
    const userRows = _.chunk(this.state.users, 4)
    
    return (
      <Container className="App">
      <NavBar />
       <Form className="contain" inline onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
          <Input innerRef="name" ref="name" type="text" name="name" id="exampleEmail" placeholder="Name" />           {/*need to add innerRef for bootstrap forms*/}
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input innerRef="email" ref="email" type="text" id="examplePassword" placeholder="Email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input innerRef="avatar" ref="avatar" type="text" id="examplePassword" placeholder="Avatar Link" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input innerRef="bio" ref="bio" type="text" id="examplePassword" placeholder="Bio" />
        </FormGroup>
        <Button color="danger">Submit</Button>
      </Form>
      
       <div>
         {userRows.map((row, index) => {
           return (                                                                                                 //for each row in our userRows array, we'll return something
           <Row key={index}>
              {row.map((u) => {
                return <Col sm="3" key={u._id}><UserItem user={u} handleDelete={this.handleDelete.bind(this)}/></Col>      //UserItem has a prop called handleDelete which can be now used in UserItem file
              })}
           </Row>  
           )
         })}
       </div>
      </Container>
    );
  }
}

export default App;

//Outermost thing inside and array needs to have a key

/* <form  onSubmit={this.handleSubmit.bind(this)}>                                                                   //When listening for an event, the handler for that event is given an arguement
        <input ref="name" type="text" placeholder="Name"/>                                                            //Ref lets us access the value of the input.We don't have to manually find value using document.queryselector.React does this automatically using refs
        <input ref="email" type="text" placeholder="Email"/>                                                          //Since button is inside the form tag, it also listens for enter keys instead of just clicking button
        <input ref="avatar" type="text" placeholder="Avatar"/>
        <input ref="bio" type="text" placeholder="Bio"/>
        <button>ADD</button>
      </form> */


      // **return <Col sm="3" key={u._id}><UserItem user={u} handleDelete={this.handleDelete.bind(this, u._id)}/></Col>      //UserItem has a prop called handleDelete which can be now used in UserItem file
