import React from "react";
import './Button.css'

export default props => {
    switch (props.className){
        case ("operador"):

            return <button className="buttonCalc operador" onClick={e => props.click(props.label)}>
                {props.label}
                </button>

        case("AC"):

            return <button className="buttonCalc AC" onClick={e => {props.click()}} >
                {props.label}
                </button>

        case("igualdade"):
        
            return <button className="buttonCalc igualdade" onClick={e => props.click()}>
                {props.label}
                </button>

    }
    return <button className="buttonCalc" onClick={e => props.click(props.label)}>{props.label}</button>
}
    
