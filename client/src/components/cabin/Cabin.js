import React from 'react';
import './Cabin.css';
import Seat from '../seat/Seat';
import data from '../../data/data';
import SortSeats from '../seatSort/SeatSort';

export default class Cabin extends React.Component {
    constructor(props) {
        super(props);
        // console.log(`Cabin.js Data: \n ${JSON.stringify(data)}`)
    }

    render() {
        return (
            <div className="cabin-box">
                <SortSeats data={data}/>
                {
                    data.map((seat)=>
                        // console.log(`Row: ${seat.row} \n Seat: ${seat.seat}`);
                        <Seat info={seat}/>
                    )
                }
            </div>
        )
    }
}