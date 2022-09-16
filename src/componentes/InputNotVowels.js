const InputNotVowels = () => {
    
    const KeyDownHandler = (evento) => {
        const vocales=['a','e','i','o','u'] 
            if (vocales.includes( evento.key.toLowerCase() ) ){
                evento.preventDefault();
            }
        console.log(evento.key);
        }
  return (

    <div>
        <h2>No acepta vocales</h2>
        <input onKeyDown={ KeyDownHandler } type="text"/>
    </div>
  )
}
export default InputNotVowels