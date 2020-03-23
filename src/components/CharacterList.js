import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log("the data was not return", error);
    });
  }, []);

  return (
    <section className="character-list">
      <Row>
        {characters.map((character, index) => {
          return <CharacterCard character={character} key={index} />;
        })}
      </Row>
    </section>
  );
}
