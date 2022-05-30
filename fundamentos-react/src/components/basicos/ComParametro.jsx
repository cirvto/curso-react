import React from 'react'

export default function ComParametro(props) {
    const displayAnother = props.p3.length > 0 ? props.p3 : 'Não existe.'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <ol>
                <li>{props.p1}</li>
                <li>{props.p2}</li>
                <li>{props.p3}</li>
                <li>{displayAnother}</li>
            </ol>
        </div>
    )
}