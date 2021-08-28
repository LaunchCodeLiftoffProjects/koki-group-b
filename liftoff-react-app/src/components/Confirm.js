import React from 'react'
import { Link } from 'react-router-dom';

function Confirm(){
    return(
        <div>
            <h1>Your Order has been confirmed</h1>
            <Link to="/">Home Page</Link>
        </div>
    )
}

export default Confirm;