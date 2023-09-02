const React = require('react');

function Show({flight})
{
    const date = flight.departs;
    const departDate = date.toISOString().slice(0,10);
    const departureTime = date.toISOString().slice(11,16);
    return(
        <main>
            <h1>Show route</h1>
            <h2>Airline: {flight.airline}</h2>
            <h3>Flight No.: {flight.flightNo}</h3>
            <h3>Departs: {flight.airport} {departDate} {departureTime}</h3>

            <h3>Destinations</h3>
            <ul>
                {
                   flight.destinations.map((destination, i) => {
                        const date = destination.arrival;
                        const arrivalDate = date.toISOString().slice(0,10);
                        const arrivalTime = date.toISOString().slice(11,16);
                        return(
                            <li>
                                {destination.airport} {arrivalDate} {arrivalTime}
                            </li>
                        )
                    })
                }
            </ul>

            <a href={`/flights/destination/${flight.id}`}>Add Destination</a>
            
        </main>
    )
}


module.exports= Show;