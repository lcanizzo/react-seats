import React from 'react';
import './Cabin.css';
import Seat from '../seat/Seat';
import data from '../../data/data';

export default class Cabin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: data,
        }
    }

    render() {
        return (
            <div className="cabin-box">
                {
                    this.state.seats.map((seat)=>
                        // console.log(`Row: ${seat.row} \n Seat: ${seat.seat}`);
                        <Seat info={seat}/>
                    )
                }
            </div>
        )
    }
}