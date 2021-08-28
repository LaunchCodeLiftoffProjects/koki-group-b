import React from 'react';

export default function Banner(props) {
    return(
        <div className="window">
            <h3>{props.message}</h3>
        </div>
    )
}