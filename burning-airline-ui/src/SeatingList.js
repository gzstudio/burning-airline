import React from 'react';
import './SeatingList.css';

class SeatingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: [],
            seatsAvailable: [],
            seatsReserved: []
        }
    }

    componentDidMount() {
        console.log()
    }

    // onClickData(seat) {
    //     if(this.state.seatReserved.indexOf(seat) > -1) { }
    // }
    
    GenerateSeatData(props) {
        let rows = this.props.rows
        let cols = this.props.cols
        let seats = [];
        for (let i = 1; i <= rows; i++) {
            seats.push([]);
          for (let j = 1; j <= cols ; j++) {
            seats[i-1].push(i + "-" + j);
          }
        }
        this.state = { seats: seats}
    }

    render() {
        return(
           <div className="container">
            <table className="grid">
                <tbody>
                {this.GenerateSeatData()}
                {
                    this.state.seats.map( 
                        row => {
                            return (
                                <tr>
                                {   row.map(
                                    column => <td>{column}</td> 
                                )}
                                </tr>
                            )
                        }
                    )
                }

                </tbody>
            </table> 
           </div>
        )
    }

}



export default SeatingList