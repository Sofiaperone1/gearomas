import React, {useContext }from 'react'
import { ItemContext } from '../../components/CartContext/CartContext'
import './cartWidget.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import{NavLink} from "react-router-dom"
import emptyCart3 from "../../Imgs/emptyCard3.png"


const CartWidget = () => {


const {cart,setCart,count ,setCount} =useContext (ItemContext)

  const deleteItem = (e) => {
      const selectedProdName = e.target.name;
      const deleteditem = cart.filter (e => e.name !== selectedProdName)
      //const updatedCount = count - selectedProdTotal
      const sumall = deleteditem.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
      console.log(sumall)
      setCount(sumall)
      setCart(deleteditem)
      }

      if (cart.length === 0) {
        return (
          <div className='cartWidget'>
            <div className='themeBars'>
              <h1>SHOP CART</h1>
            </div>
            <Button
              style={{ alignSelf: 'flex-start', marginLeft: '3%', backgroundColor: '#c2a2d3', marginTop: '3%' }}
              variant='contained'
            >
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/productos'>
                Continue buying
              </NavLink>
            </Button>
            <div className='emptyCard'>
              <img src={emptyCart3} alt="emptyCard" />
              <p>You cart is empty</p>
            </div>
          </div>
        );
      }
      
return (
<div className='cartWidget'>
<div className='themeBars'>
    <h1>SHOP CART</h1>
</div>     


<Button style={{alignSelf:"flex-start", marginLeft:"3%", backgroundColor:"#c2a2d3", marginTop:"3%"}} variant="contained"><NavLink style={{"textDecoration":"none", "color":"white"}}to="/productos">Continue buying </NavLink></Button>


<TableContainer id="cartWidgetTable" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{"textAlign":"start"}}>Producto</TableCell>
            <TableCell align="right">Cant</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Delete</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cant}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right"><input className='deleteBtnForm' type="button" value="x" name={row.name} onClick={deleteItem}/></TableCell>

            </TableRow>
          ))}
        <TableRow
              style={{"backgroundColor":"rgba(139, 139, 139, 0.13)"}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">PRECIO TOTAL</TableCell>
              <TableCell align="right">${count}</TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Button style={{marginTop:"0", width:"30%", backgroundColor:"rgba(15, 130, 136, 0.76)"}}variant="contained"> <NavLink to="/checkout" style={{textDecoration:"none", color:"white"}}>Proceed To Checkout </NavLink></Button>

</div>
)
}

export default CartWidget;
/*
 
*/