import React from 'react';
import Seat from '../seat/Seat';

export default function SortSeats(props) {
    props.data.sort(function(a,b) {
        return a.row - b.row
    })
    const sortedSeats = props.data;

    //Testing for Row rendering//


    //End testing//

    return  (
// B U L K    R E N D E R I N G
        // <div className='SortedData'>
        //     {
        //         sortedSeats.map((seat, index, array)=>
        //             <Seat info={seat}/>
        //         )
        //     }
        // </div>

//  F I R S T   R O W 
        // <div className='SortedData'>
        //     {
        //         sortedSeats.map((seat, index)=> {
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
                sortedSeats.map(function cb(currentSeat, index, array) {
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

