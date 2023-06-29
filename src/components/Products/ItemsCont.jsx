import '../../views/Products/Products.css'
import React, { useContext, useEffect} from "react" ;
import { Link } from 'react-router-dom';
import Item from "./Item"
import { ItemContext } from "../CartContext/CartContext"
import Loader from '../loader';


const ItemsCont = () => {

  const {products, handleChange, searchedProduct,getProductById} = useContext(ItemContext);
   
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);



let searchedProducts = products;

if (!handleChange) { searchedProducts = products} 
else { searchedProducts = products.filter((dato) => 
                              dato.name.toLowerCase().includes(searchedProduct.toLowerCase())) }


 return (
  <div id="itemsCont">
  {loading ? (
    <div className="loader"><Loader/></div>
  ) : (
    searchedProducts.map((product) => (
      <Link className="linkToProd" key={product.id} to={`/detail/${product.id}`} onClick={getProductById}>
        <Item className="itemCard" key={product.id} data={product}  />
      </Link>
    ))
  )}
</div>
  ) 


} 

export default ItemsCont