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

console.log(gerarNumeros(7))