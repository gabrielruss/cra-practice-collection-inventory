import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import InventoryPage from './inventory/InventoryPage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/inventory" component={InventoryPage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;