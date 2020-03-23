import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import "./styles.css";

export default function App() {
  return (
    //<div className="App">
    <main data-testid="app">
      <Header />
      <nav>
        <div className="nav-links">
          <Link to="/">
            Home
          </Link>
          <Link to="/character-list">Characters</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/character-list" component={CharacterList} />
      </Switch>
    </main>
    //</div>
  );
}
