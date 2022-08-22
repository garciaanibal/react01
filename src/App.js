import logo from './logo.svg';
import './App.css';
import Saludos from './componentes/Saludos';


function App() {
    const mensaje='Welcome to our first app';
  return (
    <>
    <div className='container'> 
      <h1 ALIGN='center'>Hello world</h1>
      <h3 ALIGN='center'>{mensaje}</h3>
      <Saludos name='Juan' lastname='Caseres'></Saludos>
      <Saludos name='Marisa' lastname='Romero'></Saludos>
      <Saludos name='Ramon' lastname='Gonzales'></Saludos>
      </div>
    </>
    
   
  );
}

export default App;
