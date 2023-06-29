import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'; 
import '../../views/Products/Products.css'
import { ItemContext } from '../CartContext/CartContext';

const CategorysCont = () => {


const {getCategory} = useContext(ItemContext)

const drawerWidth = 240;
  return (
    <div className='categorysCont'>
        
        <Drawer id='drawer'
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' , marginTop:"24%" , position:"absolute", zIndex:"1"},
    }}
  >
    
    <Box id='categories' className='box' sx={{ overflow: 'auto' }}>
    <h2> Buscar por categoria </h2>
      <List>
        {['Todos','Sahumerios', 'Recipientes', 'Sales', 'Velas' ,"Carbones"].map((text) => (
       
          <ListItem button key={text} onClick={getCategory} >
            <ListItemText primary={text} />
          </ListItem>
      
        ))}
      </List>
    </Box>
    </Drawer>
   
        
    </div>
  )
}

export default CategorysCont