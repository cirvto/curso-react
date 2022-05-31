import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


const el = document.getElementById('root')

ReactDOM.render(
    <div id='app'>
        <Primeiro />
        <ComParametro 
            titulo="Produtos TECH por menos de R$50,00"
            p1="Light Bar Monitor"
            p2="Mouse Sem Fio"
            p3="Mousepad Minimalista" />
        <Fragmento />
    </div>,
    el
)