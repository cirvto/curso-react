import React from 'react'

export default function Fragmento(props) {
    return (
        <>
        {/* Na tag acima, eu retirei o React.Fragment e pode ver que o resultado é o mesmo. */}
        {/* O React consegue entender que ali é uma tag e insere o React.Fragment. É meio que um shortcut. */}
            <h2>Trabalhando com React.Fragment</h2>
            <p>Interessante, mas um pouco confuso.</p>
        </>
    )
}