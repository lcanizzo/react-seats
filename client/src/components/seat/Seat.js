import React from 'react';
import './Seat.css';

export default class Seat extends React.Component {

    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.state= {
            seat: this.props.info,
        }
    }

    select(e) {
        console.log(`Seat selected in Seat.js:\n ${e.target.value}`);
        this.props.selectSeat(e.target.value)
    }

    render() {
        const occupied = this.props.info.occupied;
        const aisle = this.props.info.aisle;

        let space=null;
        let seatInfo = "";
        seatInfo += this.props.info.row;
        seatInfo += this.props.info.seat;

        if (!occupied) {
            space = <button className="btn btn-light space seat" value={seatInfo} onClick={this.select}> {this.props.info.seat} </button>
        } else {
            space = <button className="btn btn-light space seat unavailable" disabled> {this.props.info.seat} </button>
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