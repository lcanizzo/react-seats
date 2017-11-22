import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Cabin from './components/cabin/Cabin';
import Seat from './components/seat/Seat';

// console.log(`Data from App component: \n ${JSON.stringify(data)}`)

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
