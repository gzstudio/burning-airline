import React from 'react';
import {Router, Link} from '@reach/router';
import Flight from './Flight'
import Airplane from './Airplane'
import User from './User';
import FlightDetails from './FlightDetails'


class Navigation extends React.Component {
    render() {
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="airplane">Planes</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="flight">Flights</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="user">User</Link></li>
                    </ul>

                </nav>
                
                <div className="container">
                <Router>
                    <Airplane path='/airplane' />
                    <Flight path='/flight' />
                    <User path=' /user/:userId' /> 
                    <FlightDetails path="flights/:flightId" />
                </Router>
                </div>

            </React.Fragment>
        )
    }
}

export default Navigation;