import React from "react";
import { Link, Switch, Route } from "react-router-dom";


import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <div className="App">
    <nav>
      <h1 className="store-header">Christina's Trinkets</h1>
      <div className="nav-links">
        <Link className="some-link" to="/">
          Home
        </Link>
        <Link to="/item-list">Shop</Link>
      </div>
    </nav>

    <main data-testid='app'>
      <Header />
      <WelcomePage/>
      <CharacterList/>
    </main>
  );
}
