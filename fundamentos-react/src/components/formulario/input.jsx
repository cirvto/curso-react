import './Input.css'
import React, { useState } from 'react'

export default props => {
    const [ valor, setValor ] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className='Input'>
            <h2>{ valor }</h2>
            <div style= {{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <input value={ valor } onChange={quandoMudar} style= {{
                    margin: '5px'
                }}/>
                <input value={ valor } readOnly style= {{
                    margin: '5px'
                }}/>
                <input value={ undefined } readOnly style= {{
                    margin: '5px'
                }}/>
            </div>
        </div>
    )
}