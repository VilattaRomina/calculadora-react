//estructura de la aplicacion
import '.cache/calculadora/src/App.css';
import freecodecamplogo from '.cache/calculadora/src/imagenes/freecodecamp-logo.png';
import Boton from '.cache/calculadora/src/componentes/Boton';
import Pantalla from '.cache/calculadora/src/componentes/Pantalla';
import BotonClear from '.cache/calculadora/src/componentes/BotonCear';
import {useState} from '.cache/calculadora/node_modules/@types/react';
//libreria de funciones matematicas para js 
import { evaluate} from 'mathjs';
//ademas instalar paquete desde la terminal con npm install mathjs



function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    //actualizar input
    setInput(input + val);
  };
  //para el boton clear esta es una forma de hacerlo, pero al ser una funcion sencilla se la puede hacer directamente en el return
  // const limpiarInput = val => {
  //   setInput('');
  // }

  //definimos la funcion para el boton igual(=)
  //usamos evaluate que la vamos a consegur en un paquete llamado math.js (es una libreria)
  //npm install mathjs
  const calcularResultado = () => {
    if(input){
    setInput(evaluate(input))
    }else{
      alert('Por favor ingrese valores para realizar un calculo')
    };
  }



  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
    <img 
    src={freecodecamplogo}
    className='freecodecamp-logo'
    alt='Logo de freecodecamp'
    />
     </div>
     <div className='contenedor-calculadora'>
       <Pantalla input={input} />
        <div className='fila'>
          {/*En etiquetas de apertura y de cierre usamos childeren, se usa cuando queremos incluir algun texto entre las etiquetas*/}
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton  manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
       {/*si la funcion es sencilla podemos escribirla directamenete*/}
        <div className='fila'>
          <BotonClear manejarClear = {()=> setInput('')}> Clear 
          </BotonClear>
        </div>
     </div>
    </div>
  );
}

export default App;
