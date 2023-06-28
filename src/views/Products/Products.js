import * as React from 'react';
import "./Products.css"
import FindBar from '../../components/Products/FindBar'
import CategorysCont from '../../components/Products/CategorysCont'
import ItemsCont from '../../components/Products/ItemsCont'


export default function Products() {
   
  return (

  <div className="productsView">    

    <div className='themeBars'>
       <h1>PRODUCTS</h1>
    </div>
    <FindBar/>

  <div className='productsCont'>
  <CategorysCont/>
  <ItemsCont/>
 </div>   

</div>
  );
}