import React, {useContext} from 'react'
import '../../views/Products/Products.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ItemContext } from '../CartContext/CartContext';
/*

import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'; */

const FindBar = () => {

  
    const {handleChange, getSelectedProducts} =useContext(ItemContext) ;



  return (
    <div className='productFinders'>
   {/* <SearchIcon/> */} 
   <input id="selectInput" type="text" onChange={handleChange} />

 
     <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel className='ordenar_label' id="demo-simple-select-label">Ordenar por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
          label="Ordenar por"
          onChange={getSelectedProducts}
        >
          <MenuItem value="menor precio">menor precio</MenuItem>
          <MenuItem value="mayor precio">mayor precio</MenuItem>
       
        </Select>
      </FormControl>
    </Box>

   
  
  </div>
  )
}

export default FindBar

 