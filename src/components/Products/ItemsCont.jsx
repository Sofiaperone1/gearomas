import '../../views/Products/Products.css'
import React, { useContext, useEffect, useState} from "react" ;
import { Link } from 'react-router-dom';
import Item from "./Item"
import { ItemContext } from "../CartContext/CartContext"
import Loader from '../loader';


const ItemsCont = () => {

  const {products, handleChange, searchedProduct,getProductById} = useContext(ItemContext);
   
  const [loading, setLoading] = React.useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);



let searchedProducts = products;

if (!handleChange) { searchedProducts = products} 
else { searchedProducts = products.filter((dato) => 
                              dato.name.toLowerCase().includes(searchedProduct.toLowerCase())) }


 // PAGINADO
  
 const pageSize = 8;
   
 const startIndex = (currentPage - 1) * pageSize;
 const endIndex = startIndex + pageSize;

 const currentCards = searchedProducts.slice(startIndex, endIndex);

 function handlePageChange(newPage) {
   setCurrentPage(newPage);
 }

 const totalPages = Math.ceil(searchedProducts.length / pageSize);

 const pages = Array.from({ length: totalPages }, (_, i) => i + 1);




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
   <div className='paginado'>
        <button
          className='btnPaginado'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
          className='btnPaginado'
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        <button
         className='btnPaginado'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
</div>
  ) 


} 

export default ItemsCont