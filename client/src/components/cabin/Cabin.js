import React from 'react';
import './Cabin.css';
import Seat from '../seat/Seat';
import data from '../../data/data';
import SortSeats from '../seatSort/SeatSort';

export default class Cabin extends React.Component {
    render() {
        return (
            <div className="cabin-box">
                <SortSeats data={data}/>
            </div>
        )
    }
}