const React = require('react');

//Styles
const navStyles = {
    backgroundColor: 'black',
}

const aStyles ={
    color: 'white',
    marginLeft: '2rem'
}

const redText = {
    color: 'red',
    border: '3px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center'
}

const tableStyles = {
    border: '3px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center'
}


function Index({flights}){
    console.log(flights);
    const currentDate = new Date();
    return(
        <main>
            <nav style={navStyles}>
                <a style={aStyles} href='/flights'>All Flights</a>
                <a style={aStyles} href="/flights/new">Add Flight</a>
            </nav>
            <h1>All Flights</h1>
            <table style={tableStyles}>
                <thead >
                    <tr>
                        <th style={tableStyles}>Airline</th>
                        <th style={tableStyles}>Flight No.</th>
                        <th style={tableStyles}>Departure Date</th>
                        <th style={tableStyles}>Departure Time</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        flights.map((flight, i) => {
                            const date = flight.departs;
                            const departDate = date.toISOString().slice(0,10);
                            const departureTime = date.toISOString().slice(11,16);
                            return(
                            <tr key={flight.id}>
                                <td style={tableStyles}>{flight.airline}</td>
                                <td style={tableStyles}>{flight.flightNo}</td>
                                {
                                    flight.departs > currentDate ? <td style={tableStyles}>{departDate}</td> : <td style={redText}>{departDate}</td>
                                }
                                <td style={tableStyles}>{departureTime}</td>
                                <td style={tableStyles}><a href={`/flights/${flight.id}`}>Details</a></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    );
}

module.exports = Index;