import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const produtosJSX = produtos.map((produto, i) => {
        const preco = produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }) 
        return (
            <tbody>
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{preco}</td>
                </tr>
            </tbody>
        )
    })
    return (
        <div>
            <table className='TabelaProdutos'>
                <thead>
                    <tr>
                        <td>Posição</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                {produtosJSX}
            </table>
        </div>
    )
}