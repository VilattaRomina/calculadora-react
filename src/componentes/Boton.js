import '../hojas-de-estilo/Boton.css'

//props children valor que este dentro de la etiqueta de boton 
function Boton(props){
    //deifinimos la funcion esOperadr
    const esOperador = valor =>{
        //si no es un numero, un punto o signo igual entonces es operador y retornamos true
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        //codigo js dentro de otro codigo js que en este caso es una plantilla literals
        //si el valor de children es operador, la clase es operaador y sino null y no va realizar ningun cambio
        <div 
            className={`boton-contenedor ${esOperador(props.children)? 'operador' : null}`}
            //asignamos la funcion para que se ejecute cuando ocurra un eventoo de click
            onClick ={ () => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;