import React from 'react';
import axios from 'axios';
import SeatingsList from './SeatingList'
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
                <h3 className="text-left"> 
                Flight:  
                {this.state.flight.flight_number} <br/></h3>
                <h5 className="text-left">Date: {this.state.flight.date} <br/>
                From {this.state.flight.origin} to  {this.state.flight.destination}</h5>
                <SeatingsList rows={this.state.airplane.rows} cols={this.state.airplane.cols} />
            </div>
        )
    }
}



export default FlightDetails