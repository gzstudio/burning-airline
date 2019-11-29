import React from 'react';

class Airplane extends React.Component {
    saveAirplane(a) {
        console.log(`Parent: ${a}`);
    }
    
    render() {
        return(
            <div>
                <h1>Airplanes</h1>
                <AirplaneForm onSubmit={this.saveAirplane} />
                <AirplaneList />
            </div>
        )
    }
}

class AirplaneForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            rows: '',
            columns: ''
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState({
            name: e.target.value,
            rows: e.target.value,
            columns: e.target.value
        });
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.rows);
        console.log(this.state.columns);
    }

    render() {
        return (
            <React.Fragment>
            <form onSubmit={this._handleSubmit}>
                <nav>
                    <a href="/Planes/">Planes</a>
                    <a href="/Flights/">Flights</a> 
                    <a href="/Admin/">Admin</a> 
                </nav>
                
                <div>
                <input type="submit" value="Create Plane" />
                </div>

                <label>
                Name
                <input onChange={this._handleChange} />
                </label>

                <label>
                Rows
                <input onChange={this._handleChange} />
                </label>

                <label>
                Columns
                <input onChange={this._handleChange} />
                </label>

                <input type="submit" value="Save" />
                <input type="submit" value="Cancel" />

            </form>

            <h3>Airplane details {this.state.name}</h3>
            </React.Fragment>
        );
    }
}

class AirplaneList extends React.Component {
    render() {
        return (
            <h3>Airplane lists coming soon</h3>
        );
    }
}

export default Airplane;