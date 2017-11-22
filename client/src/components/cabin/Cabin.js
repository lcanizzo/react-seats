import React from 'react';
import './Cabin.css';
import Seat from '../seat/Seat';
import data from '../../data/data';

export default class Cabin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: data,
            firstSeat: data[0]
        }

        // this.state.seats.map((seat)=>{ 
        //   console.log(`Row: ${seat.row} \n Seat: ${seat.seat}`);
        // })
    }

    render() {
        return (
            <div className="cabin-box">
               <Seat info={this.state.firstSeat} />
            </div>
        )
    }
}