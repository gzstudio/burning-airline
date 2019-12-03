import React from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/';

class Airplane extends React.Component {
    constructor() {
        super();
        this.state = {
            airplanes: []
        };

        const fetchAirplanes = () => {
            axios.get(`${SERVER_URL}airplanes.json`)
            .then(
                results => this.setState(
                    {
                        airplanes: results.data
                    }
                )
            )
        }
        fetchAirplanes();
    }
    
    render() {
        return(
            <div>
                <h2>Airplanes</h2>
                <input type="text" value={this.props.searchTerm} placeholder="search" />
                <AirplanesList data={this.state.airplanes} searchTerm="" />
            </div>
        )
    }
}

class AirplanesList extends React.Component {
    render() {
                
        let planes = this.props.data;
        if(this.props.searchTerm.length > 0 ) {
            planes = planes.filter(x => x.name.includes(this.props.searchTerm))
        }
        return (    
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rows</th>
                        <th scope="col">Cols</th>
                    </tr>
                </thead>
                
                <tbody>
                {
                planes.map(a => 
                    (<tr>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.rows}</td>
                        <td>{a.cols}</td>
                    </tr>)
                    )  
                }   
                </tbody>
            </table>
        )
    }
}

export default Airplane;