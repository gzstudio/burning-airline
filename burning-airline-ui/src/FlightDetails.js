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
            <div>
                <h3 className="text-left">Flight : {this.state.flight.flight_number} <br/>
                {this.state.airplane.name}<br/>
                {this.state.airplane.cols}<br/>
                {this.state.airplane.rows}
                </h3>
                
            </div>
        )
    }
}

export default FlightDetails