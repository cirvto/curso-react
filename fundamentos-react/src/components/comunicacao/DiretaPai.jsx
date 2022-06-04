import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome='Victor' idade={20} carro={false}></DiretaFilho>
            <DiretaFilho nome='Thiago' idade={20} carro={false} />
        </div>
    )
}