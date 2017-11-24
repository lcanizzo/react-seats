import React from 'react';
import './Seat.css';

export default class Seat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const occupied = this.props.info.occupied;
        const aisle = this.props.info.aisle;

        let space=null;

        if (!occupied) {
            space = <button className="btn btn-light space seat">{this.props.info.seat}</button>
        } else {
            space = <button className="btn btn-light space seat unavailable" disabled>{this.props.info.seat}</button>
        }

        if (aisle) {
            space = <div className="space aisle"></div>
        }

        return (
            <div className="col-md-auto seatBox">
                {space}
            </div>
        )
    }
}