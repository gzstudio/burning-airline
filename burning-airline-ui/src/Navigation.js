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
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item"><Link class="nav-link" to="airplane">Planes</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="flight">Flights</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="user">User</Link></li>
                    </ul>

                </nav>
                
                <div class="container">
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