import axios from 'axios';

const httpClient = axios.create({
    baseURL: "https://cute-little-api.herokuapp.com/api"
  })

  httpClient.getUsers = function() {                                            //Making a new method in httpClient 
    return this({method: "get", url: "/users"})
  }

  httpClient.addUsers = function(fields) {                                      //addUser needs to get the value of inputs and only way to do that is to pass an arguement
    return this({method: "post", url: "/users", data:fields})                   //When post request is sent, data(which is axios) is set to fields.
  } 

  httpClient.editUsers = function(fields) {                                      
    return this({method: "patch", url: "/users", data:fields})              
  }

  httpClient.deleteUser = function(u) {                                   
    return this({method: "delete", url: `/users/${u._id}`})              
  }

  export default httpClient;

//when 'this' is used inside an arrow function , it makes the scope of function transparent - 'this' is not httpClient anymore since its in the global window. 
//In a traditional function 'this' becomes object that calls getUsers.