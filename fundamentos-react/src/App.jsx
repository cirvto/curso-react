import './App.css'
import React from 'react'
import Card from './components/layout/Card'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo='Componente com Filhos' color='#FFC100'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='João'/>
                    <FamiliaMembro nome='José'/>
                    <FamiliaMembro nome='Maria'/>
                </Familia>
            </Card>
            <Card titulo='Desafio Aleatório' color='#FFC233'>
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo='Fragmento' color='#EFBA3D'>
                <Fragmento />
            </Card>
            <Card titulo='Com Parâmetro' color='#DFB146'>
            <ComParametro
                titulo='Produtos TECH por menos de R$50,00'
                p1='Light Bar Monitor'
                p2='Mouse Sem Fio'
                p3='Mousepad Minimalista' />
            </Card>
            <Card titulo='Primeiro Componente' color='#CFA950'>
                <Primeiro />
            </Card>
        </div>
    </div>