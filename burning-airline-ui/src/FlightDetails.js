import React from 'react';

class FlightDetails extends React.Component {

    render() {
        return(
            <div>
                <h3 class="text-left">Flight :{this.props.flightId} </h3>
                
            </div>
        )
    }
}

export default FlightDetails