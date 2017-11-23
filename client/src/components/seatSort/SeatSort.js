import React from 'react';
import Seat from '../seat/Seat';

export default function SortSeats(props) {
    const seats = props.data.sort(function(a,b) {
        return a.row - b.row
    })
   
    let highestRow = 1;

    for (let i=0; i<seats.length; i++) {
        if (seats[i].row > highestRow) {
            highestRow = seats[i].row;
        }
    }

    let rowArrays = [];
    //Testing for Row sorting//
    for (let i=1; i<highestRow+1; i++) {
        let rowArray = seats.filter(function(seat) {
            return seat.row == i;
        })
        rowArrays.push(rowArray);
    }

    for (let i=0; i<rowArrays.length; i++) {
        console.log(`rowArrays:\n ${JSON.stringify(rowArrays[i])}`);        
    }
    //End testing//

    return  (
// B U L K    R E N D E R I N G
        // <div className='SortedData'>
        //     {
        //         seats.map((seat, index, array)=>
        //             <Seat info={seat}/>
        //         )
        //     }
        // </div>

//  F I R S T   R O W 
        // <div className='SortedData'>
        //     {
        //         seats.map((seat, index)=> {
        //             if(seat.row === 1) {
        //                 return (
        //                     <div className="row-block">
        //                         <Seat info={seat}/>  
        //                         <br/><br/>  
        //                     </div>    
        //                 );                    
        //             } else {
        //                 return (
        //                     <p>Not in first row</p>
        //                 )
        //             }
        //         })
        //     }
        // </div>

//  B Y   R O W
        <div className='SortedData'>
            {
                seats.map(function cb(currentSeat, index, array) {
                    // if(index) {
                    //     console.log(`Row Hit:`);
                    //     console.log(array[index-1].row);
                    // }
                    if(index === 0) {
                        return (
                            <Seat info={currentSeat}/>                              
                        )
                    } else {
                        if (currentSeat.row !== array[index-1].row) {
                            return (
                                <div className="row-block">
                                    <br/>
                                    <h1> New Row </h1>
                                    <Seat info={currentSeat}/>  
                                </div>    
                            );                    
                        } else {
                            return (
                                <Seat info={currentSeat}/>                                                              
                            )
                        }
                    }
                })
            }
        </div>

    )
}

