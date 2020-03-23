import React from "react";
// import Card from 'react-bootstrap/Card'
import { Card, CardHeader, CardBody, CardText, Col, CardImg } from "reactstrap";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

const CharacterCard = ({ character }) => {
  return (
    // <div className="character-list" key={props.id}>
    //   <h2>Name: {props.name}</h2>
    //   <h2>Satus: {props.status}</h2>
    //   <h2>Species: {props.species}</h2>
    //   <h2>Gender: {props.gender}</h2>
    // </div>

    <Col xs="6" md="4" xl="3">
      <br />
      <Card>
      <CardImg top width="100%" src={character.image} />
        <CardHeader>Name: {character.name}</CardHeader>
        <CardBody>
          <CardText>Staus: {character.status}</CardText>
          <CardText>Species: {character.species}</CardText>
          <CardText>Gender: {character.gender}</CardText>
        </CardBody>
      </Card>
    </Col>
   
  );
};

export default CharacterCard;