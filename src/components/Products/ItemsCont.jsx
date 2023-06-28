import '../../views/Products/Products.css'
import React, { useContext} from "react" ;
import { Link } from 'react-router-dom';
import Item from "./Item"
import { ItemContext } from "../CartContext/CartContext"
 


const ItemsCont = () => {

  const {products, handleChange, searchedProduct,getProductById} = useContext(ItemContext);
   


let searchedProducts = products;

if (!handleChange) { searchedProducts = products} 
else { searchedProducts = products.filter((dato) => 
                              dato.name.toLowerCase().includes(searchedProduct.toLowerCase())) }


 return (
    <div id="itemsCont">

{searchedProducts.map ((product) =>  {
  
  return (     
    
    <Link className="linkToProd" key={product.id} to={`/detail/${product.id}`} onClick={getProductById}>
    <Item className="itemCard" key={product.id} data={product} />  
    </Link>
    
    )})} 

    </div>
  ) 


} 

export default ItemsCont