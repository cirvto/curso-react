import React from 'react'

export default (props) => {
    const random = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return (
        <>
        {random}
        </>
    )
        
}