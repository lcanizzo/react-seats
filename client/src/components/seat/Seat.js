import React from 'react';
import './Seat.css';

export default class Seat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="seat">
                <p>Row: </p>
                <p>Seat: </p>
            </div>
        )
    }
}