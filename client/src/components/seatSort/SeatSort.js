import React from 'react';
import './SeatSort.css';
import RowBox from '../rowBox/RowBox';

export default class SortSeats extends React.Component {
    
    constructor(props) {
        super(props);
        this.selectSeat = this.selectSeat.bind(this);
        this.state= {
            selectedSeat: "",
        }
    }
    
    selectSeat(seat) {
        console.log("SelectSeat hit");      
        console.log(`Seat passed to SeatSort.js:\n ${seat}`);
        this.setState({selectedSeat: seat});
        console.log(`seat in state:\n ${this.state.selectedSeat}`);        
    }

    render() {
        const seats = this.props.data.sort(function(a,b) {
            return a.row - b.row
        })

        // Determine Highest Row
        let highestRow = 1;
        for (let i=0; i<seats.length; i++) {
            if (seats[i].row > highestRow) {
                highestRow = seats[i].row;
            }
        }

        // Filter Seat Data by Row into rowArrays
        let rowArrays = [];
        for (let i=1; i<highestRow+1; i++) {
            let rowArray = seats.filter(function(seat) {
                return seat.row === i;
            })
            rowArrays.push(rowArray);
        }

        // Sort rowArrays by Seat
        for (let i=0; i<rowArrays.length; i++) {
            rowArrays[i].sort(function(a,b) {
                if (a.seat < b.seat) {
                    return -1;
                } else if (a.seat > b.seat) {
                    return 1;
                } 
            })
        }

        return  (
            <div className="activeContent">
                <div className="selectedSeat">
                    <h1>Seat Selected: {this.state.selectedSeat}</h1>
                </div>
                <div className="container sortedData">
                    {
                        rowArrays.map((row) => 
                            <RowBox rowArray={row} selectSeat={this.selectSeat} />
                        )
                    }
                </div>
            </div>
        )
    }
}

