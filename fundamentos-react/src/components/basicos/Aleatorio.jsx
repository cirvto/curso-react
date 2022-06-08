import React from 'react'

export default (props) => {
    const {min, max} = props
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <>
        <h1>Valor aleatório:</h1>
        <p>Numéro mínimo: {min}</p>
        <p>Numéro máximo: {max}</p>
        <p>Número aleatório: {random}</p>
        </>
    )
}