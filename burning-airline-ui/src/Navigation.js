import React from 'react';
import {Router, Link} from '@reach/router';
import Flight from './Flight'
import Airplane from './Airplane'
import User from './User';


class Navigation extends React.Component {
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item"><Link class="nav-link" to="airplane">Planes</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="flight">Flights</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="user">User</Link></li>
                    </ul>

                </nav>

                <Router>
                    <Airplane path='/airplane' />
                    <Flight path='/flight' />
                    <User path=' /user/:userId' /> 
                </Router>
            </div>
        )
    }
}

export default Navigation;