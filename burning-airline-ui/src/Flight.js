import React from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/';

class Flight extends React.Component {
    constructor() {
        super();
        this.state = {
            flights: []
        };
        const fetchFlights = () => {
            axios.get(`${SERVER_URL}flights.json`)
            .then(
               results => this.setState(
                   {
                       flights: results.data
                   }
               ) 
            )
        }
        fetchFlights();
    }
    render() {
        return(
            <div>
                <h2>Flights</h2>
                <FlightsList flights={this.state.flights} />
            </div>
        )
    }
}

function FlightsList(props) {
    return(
        <div>
            {
                props.flights.map( f => ( <div key= {f.id}>
                    <p>{f.date}</p>
                    <p>{f.flight_number}</p>
                    <p>{f.origin}</p>
                    <p>{f.destination}</p>
                </div>))
            }
        </div>
    )
}

export default Flight;