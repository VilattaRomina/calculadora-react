
import '../hojas-de-estilo/Pantalla.css'

//otra alternativa en lugar de usar function es usar funcion flecha, para componentes sencillos
const Pantalla = ({input}) =>(
    //input valor ingresado por el ususario
    <div className="input">
        {input}
    </div>
);

export default Pantalla;