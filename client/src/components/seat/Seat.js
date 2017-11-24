import React from 'react';
import './Seat.css';

export default class Seat extends React.Component {
    constructor(props) {
        super(props);
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