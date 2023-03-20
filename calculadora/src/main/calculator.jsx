import React, {useState, useEffect} from "react";
import './calculator.css'
import Button from "../components/Button";
import Display from "../components/Display";


export default props => {
    const [displayValue, setDisplayValue] = useState('')

    function addDig(digito){
        document.querySelector('.zero').style.display = 'none'    
        let currentNum = displayValue.toString()
        let newDig = currentNum += digito
        setDisplayValue(newDig)
    }

    // função acionada após click em '='
    function result() {
        try {
            const expressao = displayValue.toString()
            const resultado = eval(expressao)
            setDisplayValue(resultado)}
        catch(e){
            setDisplayValue('Inválido')
        }
    }

    function apagar(){
        try{    
            const strExpressao = displayValue.toString()
            const newExpressao = strExpressao.slice(0, strExpressao.length -1)
            setDisplayValue(newExpressao)
            if (newExpressao == '')  document.querySelector('.zero').style.display = 'block'    
        }
            
        catch{
            return
        }
    }

    function clear(){
        setDisplayValue('')
        document.querySelector('.zero').style.display = 'block'    
    }

   return <div className="calculator">
        <Display value={displayValue}/>
        <Button label="AC" className="AC" click={clear}/>
        <Button label="(" className="operador" click={addDig}/>
        <Button label=")" className="operador" click={addDig}/>
        <Button label="/" className="operador" click={addDig}/>
        <Button label="7" click={addDig}/>
        <Button label="8" click={addDig}/>
        <Button label="9" click={addDig}/>
        <Button label="*" className="operador" click={addDig}/>
        <Button label="4" click={addDig}/>
        <Button label="5" click={addDig}/>
        <Button label="6" click={addDig}/>
        <Button label="-" className="operador" click={addDig}/>
        <Button label="1" click={addDig}/>
        <Button label="2" click={addDig}/>
        <Button label="3" click={addDig}/>
        <Button label="+" className="operador" click={addDig}/>
        <Button label="0" click={addDig}/>
        <Button label="." className="operador" click={addDig}/>
        <Button label="<-" click={apagar}/>
        <Button label="=" className="igualdade" click={result}/>
    </div>
}