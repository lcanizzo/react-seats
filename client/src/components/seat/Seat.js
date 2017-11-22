import React from 'react';
import './Seat.css';

export default class Seat extends React.Component {
    constructor(props) {
        console.log(`Seat Constructor Hit`);
        super(props);
        // const seat = this.props.info.seat;
        console.log(`Seat info in Seat.js: \n ${JSON.stringify(this.props.info)}`);
    }

    render() {
        return (
            <div className="seat">
                <h1>Seat: {this.props.info.seat} </h1>
                <p>Row: {this.props.info.row}</p>
            </div>
        )
    }
}