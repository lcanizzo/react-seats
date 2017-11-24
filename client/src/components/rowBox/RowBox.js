import React from 'react';
import './RowBox.css';
import Seat from '../seat/Seat';

export default class RowBox extends React.Component {
    render() {
        let row = this.props.rowArray;

        // Determine highest Seat
        let highestSeat = 'A';
        for (let i=0; i<row.length; i++) {
            if (row[i].seat > highestSeat) {
                highestSeat = row[i].seat;
            }
        }
        //Possible seats in alphabetical system
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alphabet = letters.split("");
        //Possibles seats in this instance
        const maxSeat = alphabet.indexOf(highestSeat);
        const possibleSeats = [];
        for (let i=0; i<maxSeat+1; i++) {
            let letter = {seat: alphabet[i]}
            possibleSeats.push(letter);
        }

        //for each seat in the row
        for (let i=0; i<row.length; i++) {
        //for each possible seat
            for (let j=0; j<possibleSeats.length; j++) {
            //if the seat is the possible seat
                if(row[i].seat === possibleSeats[j].seat) {
                //replace the index of the possible seat with the seat object
                    possibleSeats[j] = row[i];
                }
            }
        }

        return (
//Row Rendering Without Aisles
            <div className="row line">
                <div className="col-1 numberBox">
                    <h3 className="number">{this.props.rowArray[0].row}</h3>
                </div>
                <div className="col rowBox">
                    {    
                        possibleSeats.map((seat) =>
                            <Seat info={seat}/>
                        ) 
                    }
                </div>
            </div>
        )
    }
}
//Testing for possibleSeats Array
{/* <div className="row line">
    <div className="col-1 numberBox">
        <h3 className="number">{this.props.rowArray[0].row}</h3>
    </div>
    <div className="col rowBox">
        {    
            possibleSeats.map((seat) =>
                <div className="col seatBox">
                    <button className="btn btn-light seat">{seat.seat}</button>            
                </div>                        
            ) 
        }
    </div>
</div> */}
