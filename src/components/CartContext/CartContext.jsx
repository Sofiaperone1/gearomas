import React , {useState, useEffect ,createContext} from "react";
import db from "../../firebase"


import { collection, query, where, getDocs, orderBy} from "firebase/firestore";


export const ItemContext = createContext();


export const CartContext = ({children}) => { 

       
    
       

       const [products, setProducts] = useState ([]);
       const [searchedProduct, setSearchedProduct] = useState ("");
      const [cart, setCart] = useState ([]);
      const [count, setCount] = useState([]);
      
      const [ticket, setTicket] = useState({
        products:[],
        total:""
      })
      
      const listaSucursales = [
          {
             nombre: 'Sucursal 1',
             ciudad:'La plata',  
             direccion: '22 567' ,
             mail: 'sucursalgea1@gmail.com' ,
             telefono: '221098456' 
           },
            {
             nombre: 'Sucursal 2',
             ciudad:'La plata',  
             direccion: '45 767' ,
             mail: 'sucursalgea2@gmail.com' ,
             telefono:'221765498' 
           },
           {
             nombre: 'Sucursal 3',
             ciudad:'La plata',  
             direccion: '16 233' ,
             mail: 'sucursalgea3@gmail.com' ,
             telefono: '221345678' 
           }
      ];
 
       const getProducts = async() => { 

       const datos= await getDocs(collection(db, "products"))
       // console.log (datos.docs[0].data())       ----------> para traer uno particular
        let docs= []
        datos.forEach((doc) => { 
         //   console.log (doc.data())
            docs.push({...doc.data() , id:doc.id, key:doc.id})
            
        }
        ) ; setProducts(docs) 
   

       }

      

                
useEffect (() => {getProducts()},[]) 



const getSelectedProducts = async(e) => {
  
    if (e.target.value === "menor precio") {  
      let docs = [];
      console.log(products)
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("price"));
      const datos = await getDocs(q)
      datos.forEach((doc) => { 
        docs.push({...doc.data(), id: doc.id} )
    })
    console.log(docs)
    setProducts(docs)
      }
    
      else {
        let docs = [];
        const productsRef = collection(db, "products");
        const q = query(productsRef, orderBy("price", "desc"));
        const datos = await getDocs(q)
        datos.forEach((doc) => { 
        docs.push({...doc.data(), id: doc.id} )
        })
        console.log(docs)
        setProducts(docs)
       }
      
}


const handleChange = (e) => {
    
     console.log(e.target.value)
     setSearchedProduct(e.target.value)
        
      };
            
    
      
 const getCategory = async(e) => {    
    let categoryName = e.target.innerHTML

   const docs = [];
   
   if (categoryName === "Todos") { 
      getProducts();
   }
   else { 
     const q = query(collection(db, "products"), where("category", "==", categoryName));
     const datos= await getDocs(q)
     datos.forEach((doc) => { 
       docs.push({...doc.data(), id: doc.id} )
   })
   setProducts(docs)}
    ;}
  


return (    

    <ItemContext.Provider value={{ticket, setTicket, listaSucursales,count,setCount, products, setProducts,getProducts,getCategory,handleChange, searchedProduct, getSelectedProducts,cart, setCart}} >

        {children}
    </ItemContext.Provider>
            )
};