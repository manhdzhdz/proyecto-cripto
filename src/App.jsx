import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const API_URL=import.meta.env.VITE_API_URL

//se crea un estado para pintar la data en el navegador
 const [criptos,setCriptos]= useState()

 useEffect(()=>{
  //traer la lista de criptomonedas para construir 
  axios.get(`${API_URL}assets`)
  .then((data)=>{
    // console.log(data)
    setCriptos(data.data.data)
  })
  .catch(()=>{
    console.error("La petición falló")
  })
 },[])

 //------------------------------------------------------------------------------
 //cuando la conexión es muy lenta puede tardar para visualizar... para eso se agrega
 //un loouder
 if (!criptos) return <span>Cargando Datos....</span>

 return (
    <>
        <h1>Lista de criptomonedas</h1> 
        <ol>
          {
            criptos.map(({name,priceUsd,id})=>(
              <li key={id} > 
                Nombre= { name}
                Precio={ priceUsd}
              </li>
            ))
          }
        </ol>
    </>
  )
}
export default App