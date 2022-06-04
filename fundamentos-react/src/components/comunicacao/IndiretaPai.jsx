import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [carro, setCarro] = useState(false)

    function fornecerInformacoes (nome, idade, carro) {
        setNome(nome)
        setIdade(idade)
        setCarro(carro)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{carro ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}