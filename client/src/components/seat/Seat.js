import React from 'react';
import './Seat.css';

export default class Seat extends React.Component {
    constructor(props) {
        // console.log(`Seat Constructor Hit`);
        super(props);
        // const seat = this.props.info.seat;
        // console.log(`Seat info in Seat.js: \n ${JSON.stringify(this.props.info)}`);
    }

    render() {
        const occupied = this.props.info.occupied;

        let seat=null;
        if (!occupied) {
            seat = <button className="btn btn-light seat">{this.props.info.seat}</button>
        } else {
            seat = <button className="btn btn-light seat unavailable" disabled>{this.props.info.seat}</button>
        }
        return (
            <div className="col seatBox">
                {seat}
            </div>
        )
    }
}