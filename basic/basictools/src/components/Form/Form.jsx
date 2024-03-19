import React from 'react'
var teste = 8;
const Form = () => {
    const handleMyEvent = (e) =>{
      console.log(e)
      console.log("Ativou o Evento!")
    }
const redeButton = (x) =>{
  if(x){
        return <h1>Renderizou bonitinho!</h1>
  }else{
        return <h1>Rendelizou Lindinho!!!</h1>
      }
    }
  return (
    <>
    <div>
      <div>
        <button onClick={handleMyEvent}>click aqui</button>
      </div>
      <div>
        <button onClick={() =>{console.log("Yes! Apertou em mim.!!!")}}>Click em mim também</button>
      </div>
      <div>
        <button onClick={() => {
          if (true){
            console.log("Isso não deveria ter acontecer!")
            }
        }}>Será que vocÊ clicaria aqui</button>
      </div>
      <div>
        {redeButton(true)}
        {redeButton(false)}

      </div>
      <div>
        <strong>Valor:</strong>{teste}
        <button onClick={() => {teste = 12; console.log(teste)}}>Aperte e mude</button>
        <strong>Valor:</strong>{teste}
      </div>
    </div>
    </>
  )
}

export default Form