import React from 'react'

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
    </div>
  )
}

export default Form