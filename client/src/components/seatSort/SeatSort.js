import React from 'react';

export default function SortSeats(props) {
    console.log(`Data passed as props to SeatSort.js`);
    console.log(props.data);

    props.data.sort(function(a,b) {
        return a.row - b.row
    })

    return null;
}

