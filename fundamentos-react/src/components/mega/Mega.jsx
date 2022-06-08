import './Mega.css'
import React, {useState } from 'react'

export default props => {
    function gerarNumAleatorio(min, max, array) {
        const numAleatorio = Math.floor(Math.random() * (max + 1 - min)) + min
        return array.includes(numAleatorio) ? gerarNumAleatorio(min, max, array) : numAleatorio
    }
    
    function gerarArray(qtt) {
        const arr = Array(qtt).fill(0).reduce((nums) => {
            const novoNumero = gerarNumAleatorio(1, 60, nums)
            return [...nums, novoNumero ]
        }, []).sort((n1, n2) => n1 - n2)
    
        return arr
    }
    const [qtt, setQtt] = useState(props.qtt || 6)
    const numerosIniciais = Array(props.qtt || 6).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Quantidade de Números</label>
                <input min="6" max="12" type="number" value={qtt} onChange={e => setQtt(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarArray(qtt))}>Gerar Números</button>
        </div>
    )
}