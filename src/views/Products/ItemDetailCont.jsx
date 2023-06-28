import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemCount from '../../components/Products/ItemCount';
import { collection,getDocs} from "firebase/firestore";
import db from "../../firebase"


const ItemDetailCont = () => {
  


 const { id } = useParams();
 const [item, setItem ] = useState([]);
 
       const getProductById = async() => { 
        const docs =[];
        const datos= await getDocs(collection(db, "products"))
       
       
         datos.forEach((doc) => { 

          if (doc.id === id) {

            docs.push({...doc.data() , id:doc.id, key:doc.id})
          }
          
            
         }
         )
         setItem (docs[0])
          }
        
 useEffect (() => {getProductById()},[id]) 
 
if (item) {
  return (
    <div  className='itemDetailCont'>
      <div className='detail-img'>
      <img src={item.img } alt="prod" />
      </div>
      <div className='detail_desc'>
      <h1>{item.name}</h1>
      <h2>${item.price} </h2>
      <h3>{item.description}</h3>
      <ItemCount data={item}/>
      <h4>+ Add to favorites </h4>
      </div>
    </div>
  ) 
}
else { return (
  <div className='itemDetailCont '>
    no se encuentra este producto
  </div>
)}

}



export default ItemDetailCont;
