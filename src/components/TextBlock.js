import React from 'react'

export const TextBlock = ({title, body, onClick}) => (
        <div className="sb-block">
            <h2>{title}</h2><p>{body}</p>
            <button onClick={onClick}>Edit</button>
        </div>
)


