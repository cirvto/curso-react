import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    const gerarCarro = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={function (e) {
                cb('João', gerarIdade(), gerarCarro() )
            }
            }>Fornecer Informações</button>
        </div>
    )
}