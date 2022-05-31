import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60}/>
        <Fragmento />
        <ComParametro
            titulo='Produtos TECH por menos de R$50,00'
            p1='Light Bar Monitor'
            p2='Mouse Sem Fio'
            p3='Mousepad Minimalista' />
        <Primeiro />
    </div>