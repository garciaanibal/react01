import logo from './logo.svg';
import './App.css';
import Saludos from './componentes/Saludos';
import { useState,useEffect } from 'react';
import InputNotVowels from './componentes/InputNotVowels';

function App() {
  const mensaje='Welcome to our first app';

  const[counter, setCounter] = useState(0);
  const [products, setProducts]=useState();

  const handleClick = () => {
    console.log("hiciste click");
    setCounter(counter + 1);
    
  }
  console.log("hubo un render");
   
  useEffect(()=>{

    console.log("Promesa en mouting")
    const getProducts = new Promise((resolve,reject)=>{
      const rand=Math.random();
      console.log(rand);
      if(rand > 0.5){
        resolve(["mouse, teclado, cpu"]);
      }else{
        reject("Promesa Rechazada");
      }
      
      
    })

    getProducts
      .then((data)=>{console.log(data);})
      .catch(err => {console.log(err);})
      .finally(() => {console.log("Siempre sucede")})
    
    // console.log("Eefecto al montaje");
   },[]);

   

   useEffect(()=>{
     console.log("Eefecto al montaje y cambio de counter")
    },[ counter ]);

    
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
      <InputNotVowels/>

    </div>

    </>
   
  );
}

export default App;
