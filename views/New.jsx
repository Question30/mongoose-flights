const React = require('react');

const navStyles = {
    backgroundColor: 'black',
}

const aStyles ={
    color: 'white',
    marginLeft: '2rem'
}

const formSpacing = {
    margin: '1em'
}

const formStyle= {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    margin: '0 auto',
    border: '2px solid black',
    padding: '1rem'

}

const centerHeading = {
    marginLeft: '24rem'
}

function New({departsDate}){
    return(
        <main>
            <nav style={navStyles}>
            <a style={aStyles} href='/flights'>All Flights</a>
            </nav>
            <div style={centerHeading}>
            <h1>Add New Flight</h1>
            </div>
            <form style={formStyle} action='/flights' method='POST' >
                Airline: <select style={formSpacing} name='airline'>
                    <option value=''>Please Choose an Airline</option>
                    <option value="American">American</option>
                    <option value='Southwest'>SouthWest</option>
                    <option value='United'>United</option>
                </select>
                Airport: <select style={formSpacing} name='airport'>
                    <option value=''>Please Choose an Airport</option>
                    <option value="AUS">AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select>
                Flight No.: <input style={formSpacing} type='number' name='flightNo' min='10' max='9999' />
                Departure Date: <input style={formSpacing} type='datetime-local' defaultValue={departsDate} name='departs'/>
                <input style={formSpacing} type='submit' value='Add Flight'/>
            </form>
        </main>
    );
}

module.exports = New;