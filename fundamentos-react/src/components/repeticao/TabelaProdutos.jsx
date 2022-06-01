import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const produtosJSX = produtos.map((produto) => {
        const preco = produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }) 
        return (
            <tr key={produto.id}>
                <td style={{border: '1px solid red'}}>{produto.nome}</td>
                <td style={{border: '1px solid red'}}>{preco}</td>
            </tr>
        )
    })
    return (
        <div>
            <table style={{border: '1px solid red'}}>
                {produtosJSX}
            </table>
        </div>
    )
}