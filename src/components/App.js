import React, { Component } from 'react';
import '../styles/App.css';
import HomePage from './home/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
