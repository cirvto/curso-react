import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let carro = false

    function fornecerInformacoes (nomeParam, idadeParam, carroParam) {
        nome = nomeParam
        idade = idadeParam
        carro = carroParam

        console.log(nomeParam, idadeParam, carroParam)
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