import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const alunosJSX = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} está com {aluno.nota}.
            </li>
        )

    })

    return (
        <div>
            <ul style={ {listStyle: 'none'} }>
                {alunosJSX}
            </ul>
        </div>
    )
}