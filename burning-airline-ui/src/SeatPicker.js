import React from 'react';

const seats = [
    ["row 0 seat 0", "row 0 seat 1", "row 0 seat 2"],
    ["row 1 seat 0", "row 1 seat 1", "row 1 seat 2"],
    ["row 2 seat 0", "row 2 seat 1", "row 2 seat 2"],
];

for (row of seats) {
    for (column of row) {
        console.log(column);
    }
}

export default 