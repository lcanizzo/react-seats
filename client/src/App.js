import React, { Component } from 'react';
import './App.css';
import data from './data/data';
import Navbar from './components/navbar/Navbar';
import Cabin from './components/cabin/Cabin';
import Seat from './components/seat/Seat';

// console.log(`Data from App component: \n ${JSON.stringify(data)}`)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: data
    }

    this.state.seats.map((seat)=>{ 
      console.log(`Row: ${seat.row} \n Seat: ${seat.seat}`);
    })
  }

 


  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Cabin />
        {/* <ul>
          {
            this.state.seats.map((seat)=>{
              return 
                <Seat info={seat}/>
            })
          }
        </ul> */}
      </div>
    );
  }
}

export default App;
