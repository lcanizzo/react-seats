import React from 'react';
import './SeatSort.css';
import Seat from '../seat/Seat';

export default function SortSeats(props) {
    const seats = props.data.sort(function(a,b) {
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
        <div className="sortedData">
            {
                rowArrays.map((row) => 
                    <div className="container rowBox">
                        {    
                            row.map((seat) =>
                                <Seat info={seat}/>
                            ) 
                        }
                    </div>
                )
            }
        </div>
    )
}

