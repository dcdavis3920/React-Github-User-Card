import React from "react";
import { Card, CardText, CardImg, CardHeader, Col } from "reactstrap";

function UserCard(props) {
  console.log(props);
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card>
        <CardHeader>GitHub User </CardHeader>
        <CardText>{props.data.user.name}</CardText>
        <CardImg src={props.data.user.avatar_url} />
        <CardText>Handle: {props.data.user.login} </CardText>
        <CardText>Followers: {props.data.user.followers} </CardText>
      </Card>
    </Col>
  );
}
export default UserCard;
