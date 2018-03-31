import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    //*
const UserItem = (props) => {
    //* const truncatedBio = truncateString(user.bio, 30)
    return (
        <Card>
            <CardImg top width="100%" src={props.user.avatar} alt={props.user.name}/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.user.email}</CardSubtitle>
                        <CardText>{props.user.bio.substring(40,0)}...</CardText>
                    <Button color="danger" onClick={() => {props.handleDelete(props.user)}}>Delete</Button>       {/* => function allows us to RUN the handleDelete as a function ()and we can pass arguments */}
            </CardBody>
        </Card>
    )
}

export default UserItem

// {props.user.bio.slice(0,30)}
//THIS IS A CHILD COMPONENT. AND THE BELOW WAY WILL ALLOW YOU TO REUSE THE COMPONENT

// REUSABLE FUNCTION CAN BE USED SO THAT WE CAN USE IT IN ALL PARTS OF THE APP.
//{props.user.bio.length > 30?  (props.user.bio.substring(0, 30) + "...") : (props.user.bio)}
//* function truncateString(str, num) {
//      if(num> str.length) return str 
//      return str.slice(0, num) + "..."    //NOT AFFECTING THE ORIGINAL STRING
//}
//* function truncateString(str, num) {
//      return str.length > 30?  (str.substring(0, num) + "...") : (str)
// }

{/* **<Button onClick={props.handleDelete}>Delete</Button>  THIS DOESN'T HAVE THE PROPS.USER BECAUSE IN APP.JS, WE HAVE PASSED A SECOND ARGUEMENT AS THE ID OF THE USER*/}

