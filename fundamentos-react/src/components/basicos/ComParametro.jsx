import React from 'react'

export default function ComParametro(props) {
    const displayAnother = props.p3.length > 0 ? props.p3 : 'Não existe.'
    // Props são somente LEITURA, ou seja, o código abaixo irá gerar um erro.
    // props.p1 = `${props.p1} é muito bom`
    // O certo é criar um novo espaço de armazenamento e inserir a mudançã que você deseja.
    const p4 = `${props.p1} é muito bom`
    return (
        <div>
            <h2>{props.titulo}</h2>
            <ol>
                <li>{props.p1}</li>
                <li>{props.p2}</li>
                <li>{props.p3}</li>
                <li>{displayAnother}</li>
                <li>{p4}</li>
            </ol>
        </div>
    )
}