import React from 'react'

import './Card.css'

const getBackgroundColor = background => background === 'blue' ? 'bg-blue' : 'bg-white'

export default props =>
    <div className={`card ${getBackgroundColor(props.backgroundColor)}`}>
        <h2>{props.title}</h2>
        {props.children}
    </div>