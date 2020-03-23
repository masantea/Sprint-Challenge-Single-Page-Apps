import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

import { Container, Row, CardColumns } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const [search, setSearch] = React.useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const result = characters.filter(character => {
    const lowerCaseSearch = search.toLocaleLowerCase();
    const lowerCaseName = character.name.toLocaleLowerCase();

    return lowerCaseName.startsWith(lowerCaseSearch);
    //return character.name.toLocaleLowerCase.startsWith(search.toLocaleLowerCase());
  });

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <Container>
      <SearchForm value={search} onChange={handleChange} />

      <Row>
        {result.map((character, index) => {
          return <CharacterCard character={character} key={index} />;
        })}
      </Row>
    </Container>
  );
}
