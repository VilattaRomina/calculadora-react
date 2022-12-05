import React from ".cache/calculadora/node_modules/@types/react";
import '.cache/calculadora/src/hojas-de-estilo/BotonClear.css'

const BotonClear = (props) => (
    //asignamos la funcion para que se ejecute cuando ocurra un eventoo de click
    //tambien en lugar de div se puede usar la etiqueta button
    <div className="boton-clear" 
    //asignamos la funcion  de manejarClear a onClick
    onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear