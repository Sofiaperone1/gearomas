
import React from "react";
import "./App.css"
//import Checkout from "./views/Cartwidget/Checkout";
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
//import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import {CartContext} from './components/CartContext/CartContext'
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import ContactForm from "./views/ContactForm/ContactForm";
//import CartWidget from "./views/Cartwidget/CartWidget"
//import Products from "./views/Products/Products"
import Error404 from "./components/Error404"
//import ItemDetailCont from "./views/Products/ItemDetailCont.js"
import Footer from "./components/Footer/Footer"

const App = () => {
  
  return (
    <CartContext>
    <BrowserRouter>
     <div className="App">
      <Navbar/>
    <Routes>

     <Route path="/"  element={<Home/>}></Route>
     <Route path="/contact" index element={<ContactForm/>}></Route>
    {/* <Route path="/productos" index element={<Products/>}></Route>
        <Route path="/category/:name"  element={<Products/>} ></Route>
        <Route path="/cartWidget" index element={<CartWidget/>}></Route>
        <Route path="/detail/:id"  element={<ItemDetailCont/>} ></Route>*/} 
   {/* <Route path="/checkout"  element={<Checkout/>} ></Route> */}  
     <Route path="*"  component={<Error404/>} ></Route>

     </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
    </CartContext>

    
  )

}
export default App;