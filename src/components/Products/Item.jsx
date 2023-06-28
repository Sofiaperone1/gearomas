
import React from 'react'


const Item = ({data})  => {
  return (

          <div className='itemsCard'>
            <img src={data.img} alt="prod img" />
            <div className='itemsC_text'>
              <h3>{data.name}</h3>
              <h3 style={{"color":"red", "fontWeight":"bold"}}>${data.price}</h3>
              <h4>+ see more</h4>
            </div>
          </div>
  
 
    )
}

export default Item

/*   <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
        alt="productoImg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       <h5>{data.name}</h5> 
      
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ${data.price}
        + see more details
        </Typography>
      </CardContent>
    
    </Card> */