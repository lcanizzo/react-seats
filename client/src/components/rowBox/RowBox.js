import React from 'react';
import Seat from '../seat/Seat';

export default class RowBox extends React.Component {

    render() {
        return (
            <div className="row rowBox">
                {    
                    this.props.row.map((seat) =>
                        <Seat info={seat}/>
                    ) 
                }
            </div>
        )
    }
}