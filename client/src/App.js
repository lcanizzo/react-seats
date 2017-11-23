import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Cabin from './components/cabin/Cabin';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
      {/* Not rendering Nav for brevity
        <Navbar /> */}
        <Cabin />
      </div>
    );
  }
}

export default App;
