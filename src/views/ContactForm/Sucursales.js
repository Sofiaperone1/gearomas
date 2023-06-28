import React,{useContext} from 'react'
import { ItemContext } from '../../components/CartContext/CartContext'

const Sucursales = () => {
  const {listaSucursales} = useContext (ItemContext)

  return (
  <div className='sucursalesList'>
    {
      listaSucursales.map ((e) => {
        return ( 
        <div key={e.nombre}> 
        <h2>{e.nombre}</h2> 
        <h3>{e.ciudad} - {e.direccion}</h3> 
        <h3>{e.mail}</h3> 
        <h3>{e.telefono}</h3>
        </div>
        )
       })
    }
  </div>
  )
}

export default Sucursales