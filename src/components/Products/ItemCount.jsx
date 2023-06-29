
import React from "react";
import {useState, useContext} from "react"
import { ItemContext } from "../CartContext/CartContext";
import Swal from 'sweetalert2'



const ItemCount = ({data}) => {
 
    const {cart, setCount} = useContext (ItemContext)

    const [counter, setCounter] = useState (0); 
    
    const sumarUno = () => {
        if (counter < data.stock ) {
        setCounter(counter + 1); 
      
        }
      };
      const restarUno = () => {
        if (counter > 0 ) { 
          setCounter (counter - 1) 
       
                            }};

  const addToCart = () => { cart.push({cant:counter, name:data.name, price:data.price, total:counter*data.price}) ;
                           console.log(cart);
                        
                          const sumall = cart.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
                          console.log(sumall)
                          setCount(sumall)

                          const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 900,
                        
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Producto agregado'
                          })
                        }
   
  return (
    <div>
    <div className='contador'>
    <button className="roundBtn" onClick={restarUno}>
    -
    </button>

    <p  id="InitalCount"> {counter} </p>

    <button className="roundBtn" onClick={sumarUno}>
    +
    </button>
  
    </div>
 <button className="addToCart" onClick={addToCart}>ADD TO CART</button>
   </div>
  )
}

export default ItemCount

// <button className="addToCart" onClick={showCart}>AGREGAR AL CARRITO2</button>
