import React from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/';

class FlightDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            flights: {},
        };
    }

    componentDidMount() {
        axios.get(`${SERVER_URL}flights/${this.props.flightId}.json`)
            .then(results => {
                this.setState({flights: results.data});
            });
        }

    render() {
        return(
            <div>
                <h3 class="text-left">Flight :{this.props.flight} </h3>
                <h3 class="text-left">Flight :{this.props.flight_Number} </h3>
            </div>
        )
    }
}

export default FlightDetails