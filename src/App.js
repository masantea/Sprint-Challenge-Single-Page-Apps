import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* // <main data-testid='app'> */}
      <Header />
      <nav>
        <div className="nav-links">
          <Link className="some-link" to="/">
            Home
          </Link>
          <Link to="/character-list">Characters</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={WelcomePage} />
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        {/* <Route exact path="/item-list" component={ItemsList} /> */}
        <Route exact path="/character-list">
          <CharacterList />
        </Route>
        {/* <Route path="/item-list/:dataID" component={Item} /> */}
        {/* <Route path="/item-list/:itemID">
          <Item />
        </Route> */}
      </Switch>
      {/* // </main> */}
    </div>
  );
}
