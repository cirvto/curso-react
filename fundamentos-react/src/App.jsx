import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo='Produtos TECH por menos de R$50,00'
            p1='Light Bar Monitor'
            p2='Mouse Sem Fio'
            p3='Mousepad Minimalista' />
        <Primeiro />
    </div>