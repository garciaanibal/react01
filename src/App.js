import logo from './logo.svg';
import './App.css';
import Saludos from './componentes/Saludos';
import { useState } from 'react';

function App() {
  const mensaje='Welcome to our first app';

  const[counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log("hiciste click");
    setCounter(counter + 1);
    
  }
    console.log("hubo un render");
  
    
  return (
    <>
    <div className='container'> 
      <h1 ALIGN='center'>Hello world</h1>
      <h3 ALIGN='center'>{mensaje}</h3>
      <Saludos name='Juan' lastname='Caseres'></Saludos>
      {/* <Saludos name='Marisa' lastname='Romero'></Saludos>
      <Saludos name='Ramon' lastname='Gonzales'></Saludos> */}
      
      <div className='mx-5'>
        <strong>Contador: {counter} </strong>
      </div>
      <button onClick={handleClick} className="mx-5">Click</button>


    </div>

    </>
   
  );
}

export default App;
