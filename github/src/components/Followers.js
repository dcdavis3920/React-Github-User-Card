import React from "react";
import { Card, CardText, CardImg, CardHeader, Col } from "reactstrap";

function Followers(props) {
  console.log(props);
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card>
        <CardHeader>GitHub User Info</CardHeader>
        <CardText>{props.data.name}</CardText>
        <CardImg src={props.data.avatar_url} />
        <CardText>Handle: {props.data.login} </CardText>
        <CardText>Followers: {props.data.followers} </CardText>
      </Card>
    </Col>
  );
}
export default Followers;
