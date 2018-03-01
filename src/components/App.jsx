import React, { Component } from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import InventoryPage from "./inventory/InventoryPage";
import ManageGamePage from "./inventory/ManageGamePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/inventory" component={InventoryPage} />
          <Route exact path="/game" component={ManageGamePage} />
          <Route path="/game/:id" component={ManageGamePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
