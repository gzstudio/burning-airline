// // const flights = [{ destination: "SYD" }, { destination: "MEL" }, { destination: "NYC" }];
// // let flights_for_render = [...flights];

// // function onSearchChange(event) {
// //     console.log(event)
// //     flights_for_render = [];
// //     for (flight of flights) {
// //         if (flight.destination.indexOf(event) > -1) {
// //             flights_for_render.push(flight);
// //         }
// //     }
// //     console.log(flights_for_render);
// // }

// // $('input').change(function () {
// //     console.log($(this).val());
// //     onSearchChange($(this).val());
// // });

// import React, { Component } from 'react';
// import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/';

// class SearchBar extends Component {

//     constructor() {

//         super();
//         this.state = {
//             origin: '',
//             destination: ''
//         };

//         this.handleChange1 = this.handleChange1.bind(this);
//         this.handleChange2 = this.handleChange2.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     handleChange1(e) {
//         this.setState({ origin: e.target.value });
//     }

//     handleChange2(e) {
//         this.setState({ destination: e.target.value });
//     }

//     handleSubmit(event) {
//         event.preventDefault();

//         axios.get(PlaneURL).then(function (results) {
//             this.data
//             debugger;

//         }.bind(this));

//     }



// }

// export default AirplaneSearch