import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserItem = (props) => {
    return (
        <Card>
            <CardImg top width="25%" src={props.user.avatar} alt={props.user.name}/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.user.email}</CardSubtitle>
                        <CardText>{props.user.bio}</CardText>
                    <Button onClick={() => props.handleDelete(props.user)}>Delete</Button>
            </CardBody>
        </Card>
    )
}

export default UserItem

// {props.user.bio.slice(0,30)}