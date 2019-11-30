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
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Airplane</th>
                    <th scope="col">Date</th>
                    <th scope="col">Flight Number</th>
                    <th scope="col">Origin</th>
                    <th scope="col">Destination</th>
                </tr>
            </thead>

            <tbody>
            {
                    props.flights.map(f => (<tr>
                        <td>{f.id}</td>
                        <td>{f.date}</td>
                        <td>{f.flight_number}</td>
                        <td>{f.origin}</td>
                        <td>{f.destination}</td>
                    </tr>)
                    )  
            }
            </tbody>
        </table>
    )
}

export default Flight;