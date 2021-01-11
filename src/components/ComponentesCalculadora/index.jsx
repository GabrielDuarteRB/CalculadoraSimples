import React, { useState } from 'react';
import './estilo.css'

export function Calculadora() {
    const [numero1, setNumero1] = useState('')

    function colocar(event){
        setNumero1(numero1 + event.target.value)
    }

    function clear(){
        setNumero1('')
    }
    
    //Operações
    function soma(){
        setNumero1(numero1 + '+')
    }

    function subtracao(){
        setNumero1(numero1 + '-')
    }

    function multiplicacao() {
        setNumero1(numero1 + '*')
    }

    function divisao() {
        setNumero1(numero1 + '/')
    }

    function calcular() {
        const total = (eval(numero1))
        setNumero1(total)
    }


    return (
        <div className="calculadora">
            <input className="visualizador" id="visualizador" defaultValue={numero1}/>
            <div className="botoes">
                <button className="botao" onClick={soma}>+</button>
                <button className="botao" onClick={subtracao}>-</button>
                <button className="botao" onClick={divisao}>/</button>
                <button className="botao" onClick={multiplicacao}>x</button>
            </div>
            <div className="botoes">
                <button className="botao" value={9} onClick={e => colocar(e)}>9</button>
                <button className="botao" value={8} onClick={e => colocar(e)}>8</button>
                <button className="botao" value={7} onClick={e => colocar(e)}>7</button>
                <button className="botao" value={6} onClick={e => colocar(e)}>6</button>
            </div>
            <div className="botoes">
                <button className="botao" value={5} onClick={e => colocar(e)}>5</button>
                <button className="botao" value={4} onClick={e => colocar(e)}>4</button>
                <button className="botao" value={3} onClick={e => colocar(e)}>3</button>
                <button className="botao" value={2} onClick={e => colocar(e)}>2</button>
            </div>
            <div className="botoes">
                <button className="botao" value={1} onClick={e => colocar(e)}>1</button>
                <button className="botao" value={0} onClick={e => colocar(e)}>0</button>
                <button className="botao" onClick={clear}>C</button>
                <button className="botao" onClick={calcular}>=</button>
            </div>
        </div>
    )
}