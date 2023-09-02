const React = require('react');


function Destination({flight}) {
    return(
        <main>
            <form action={`/flights/${flight.id}`} method='POST'>
                <select name='airport' required>
                   Destination <option value=''>Select a destination</option>
                    <option value="AUS">AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select>
                Arrival: <input type='datetime-local' name='arrival' required/>
                <input type='submit' value='Add Destination'/>
            </form>
        </main>
    );
}

module.exports= Destination;