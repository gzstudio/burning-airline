import React from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/';

class FlightDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flight: {},
            airplane: {}
        };
    }

    async componentDidMount() {
        const flight = await axios.get(`${SERVER_URL}flights/${this.props.flightId}.json`)
        .then(results => {
            this.setState({flight: results.data});
        })

        const airplane = await axios.get(`${SERVER_URL}airplanes/${this.state.flight.airplane_id}.json`).then(results => {
            this.setState({airplane: results.data});
        })
    }

    render() {
            
        return(            
            <table classname="table">
                <thead>
                    <tr>
                        <th scope="col">Flight</th>
                        <th scope="col">Airplane Number</th>
                        <th scope="col">Cols</th>
                        <th scope="col">Rows</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{this.state.flight.flight_number}</td>
                        <td>{this.state.airplane.name}</td>
                        <td>{this.state.airplane.cols}</td>
                        <td>{this.state.airplane.rows}</td>
                    </tr>
                    
                </tbody>
            </table>
        )
    }
}

export default FlightDetails