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
                {/* <AirplaneForm onSubmit={this.saveAirplane} /> */}
                <AirplanesList airplanes={this.state.airplanes} />

                {/* <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Airplane number</th>
                            <th scope="col">Flight number</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        )
    }
}

class AirplanesList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.airplanes.map(a => (<div key={a.id}>
                        <p>{a.name}</p>
                        <p>{a.rows}</p>
                        <p>{a.cols}</p>
                    </div>))
                }
            </div>
        )
    }
}

// class AirplaneForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             content: '',
//         };
//         this._handleChange = this._handleChange.bind(this);
//         this._handleSubmit = this._handleSubmit.bind(this);
//     }

//     _handleChange(e) {
//         this.setState({
//             content: e.target.value,
//         });
//     }

//     _handleSubmit(e) {
//         e.preventDefault();
//         console.log(this.state.name);
//     }

//     render() {
//         return (
//             <React.Fragment>
//             <form onSubmit={this._handleSubmit}>
//                 <nav>
//                     <a href="/Planes/">Planes</a>
//                     <a href="/Flights/">Flights</a> 
//                     <a href="/Admin/">Admin</a> 
//                 </nav>
                
//                 <div>
//                 <input type="submit" value="Create Plane" />
//                 </div>

//                 <label>
//                 Name
//                 <input onChange={this._handleChange} />
//                 </label>

//                 <label>
//                 Rows
//                 <input onChange={this._handleChange} />
//                 </label>

//                 <label>
//                 Columns
//                 <input onChange={this._handleChange} />
//                 </label>

//                 <input type="submit" value="Save" />
//                 <input type="submit" value="Cancel" />

//             </form>

//             <h3>Airplane details {this.state.name}</h3>
//             </React.Fragment>
//         );
//     }
// }

export default Airplane;