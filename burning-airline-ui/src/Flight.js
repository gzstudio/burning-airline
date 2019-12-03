import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
const SERVER_URL = 'http://localhost:3000/';

class Flight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: null,
            airplanes: null,
        };
    }

    componentDidMount() {
        axios.get(`${SERVER_URL}flights.json`)
            .then(results => {
                this.setState({flights: results.data});
            });
            

        axios.get(`${SERVER_URL}airplanes.json`)
            .then(results => {
                let planesObj = {};
                results.data.forEach((plane) => {
                    planesObj[plane.id] = plane
                });
                this.setState({airplanes: planesObj}) 
            });
    }

    render() {
        return(
            <div>
                <h3 class="text-left">Flights</h3> <br/>
                <FlightsList flights={this.state.flights} airplanes={this.state.airplanes} />
            </div>
        )
    }
}

function FlightsList(props) {
    


    let renderFlights = () => {
        if(props.flights !== null && props.airplanes  !== null)
        {
            return(props.flights.map(f => (<tr>
                <td>{f.date}</td>      
                <td><Link to={`/flights/${f.id}`}>{f.flight_number}</Link>
                </td>
                <td>{f.origin} > {f.destination}</td>
                <td>{props.airplanes[f.airplane_id].name}</td>
                <td>{props.airplanes[f.airplane_id].cols * props.airplanes[f.airplane_id].rows}</td>
            </tr>)));
        }

        return (<tr><td>LOADING</td></tr>);
    }

    return(
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Flight</th>
                    <th scope="col">From / To</th>
                    <th scope="col">Plane</th>
                    <th scope="col">Seat</th>
                </tr>
            </thead>

            <tbody>
            { renderFlights()}
            </tbody>
        </table>
    )
    
}

export default Flight;