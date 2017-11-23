import React from 'react';
import Seat from '../seat/Seat';

export default function SortSeats(props) {
    props.data.sort(function(a,b) {
        return a.row - b.row
    })
    const sortedSeats = props.data;
    console.log(`Data passed as props to SeatSort.js`);
    console.log(props.data);

        return  (
            <div className='SortedData'>
                {
                    props.data.map((seat)=>
                        // console.log(`Row: ${seat.row} \n Seat: ${seat.seat}`);
                        <Seat info={seat}/>
                    )
                }
            </div>
        )
}

