function gerarNumeroNaoContido(min, max, array) {
    const numAleatorio = Math.floor(Math.random() * (max + 1 - min)) + min
    return array.includes(numAleatorio) ? gerarNumeroNaoContido(min, max, array) : numAleatorio
}

function gerarNumeros(qtde) {
    const numeros = Array(qtde).fill(0).reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        // console.log([...nums, novoNumero])
        return [...nums, novoNumero ]
    }, []).sort((n1, n2) => n1 - n2)

    return numeros
}

console.log(gerarNumeros(7))