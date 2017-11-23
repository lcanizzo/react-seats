import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Cabin from './components/cabin/Cabin';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Cabin />
      </div>
    );
  }
}

export default App;
