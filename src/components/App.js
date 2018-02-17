import React, { Component } from 'react';
import '../styles/App.css';
import HomePage from './home/HomePage';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        {/* PUT ROUTING HERE */}
      </div>
    );
  }
}

export default App;
