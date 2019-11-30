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
            </div>
        )
    }
}

class AirplanesList extends React.Component {
    render() {
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
                    this.props.airplanes.map(a => 
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