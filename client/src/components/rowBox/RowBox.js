import React from 'react';
import './RowBox.css';
import Seat from '../seat/Seat';

export default class RowBox extends React.Component {
    render() {
        return (
            <div className="row line">
                <div className="col-1 numberBox">
                    <h3 className="number">{this.props.rowArray[0].row}</h3>
                </div>
                <div className="col rowBox">
                    {    
                        this.props.rowArray.map((seat) =>
                            <Seat info={seat}/>
                        ) 
                    }
                </div>
            </div>
        )
    }
}