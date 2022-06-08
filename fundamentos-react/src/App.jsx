import './App.css'
import React from 'react'
import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaDeAlunos from './components/repeticao/ListaDeAlunos'
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
            <Card titulo='#13 Mega' color='#BDA161'>
                <Mega />
            </Card>
            <Card titulo='#12 Contador' color='#966902'>
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo='#11 Componente Controlado' color='#F0D9A3'>
                <Input />
            </Card>
            <Card titulo='#10 Comunicação Indireta' color='#EBCC84'>
                <IndiretaPai />
            </Card>
            <Card titulo='#09 Comunicação Direta' color='#E5BF65'>
                <DiretaPai />
            </Card>
            <Card titulo='#08 Renderização Condicional' color='#D69909'>
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Victor' }} />
                <UsuarioInfo usuario={{ email: 'vctor.@g.com' }} />
            </Card>
            <Card titulo='#07 Tabela de Produtos' color='#DBA628'>
                <TabelaProdutos />
            </Card>
            <Card titulo='#06 Repetição' color='#E0B347'>
                <ListaDeAlunos />
            </Card>
            <Card titulo='#05 Componente com Filhos' color='#FFC100'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='João'/>
                    <FamiliaMembro nome='José'/>
                    <FamiliaMembro nome='Maria'/>
                </Familia>
            </Card>
            <Card titulo='#04 Desafio Aleatório' color='#FFC233'>
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo='#03 Fragmento' color='#EFBA3D'>
                <Fragmento />
            </Card>
            <Card titulo='#02 Com Parâmetro' color='#DFB146'>
            <ComParametro
                titulo='Produtos TECH por menos de R$50,00'
                p1='Light Bar Monitor'
                p2='Mouse Sem Fio'
                p3='Mousepad Minimalista' />
            </Card>
            <Card titulo='#01 Primeiro Componente' color='#CFA950'>
                <Primeiro />
            </Card>
        </div>
    </div>