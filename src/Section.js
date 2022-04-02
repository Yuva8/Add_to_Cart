import React, { useState } from 'react';
import img from './img.jpg';
import { makeStyles } from '@mui/styles';
import {Stack,Button,Badge,Grid,Rating,InputLabel,Select,Box,Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Typography,Tooltip} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Section(){
    const [count, setCount] = React.useState(0);
    const toggle = (e) =>{
       
      if(e.target.textContent === "Add to cart"){
          setCount(count+1)
          e.target.textContent = "Remove from cart";
      }else if(e.target.textContent === "Remove from cart"){
        setCount(count-1)
        e.target.textContent = "Add to cart";
      }
    }
   
   
    


    return(
        <><div style={{ padding: '15px' }}>

            <Stack spacing={2} direction="row" style={{ paddingTop: '20px' }}>
                <Typography style={{ color: 'black', paddingLeft: '120px', fontSize: "22px", paddingTop: '15px' }}>Start Bootstrap</Typography>
                <Button variant="text" style={{ color: 'black', paddingLeft: '20px' }}>Home</Button>
                <Button variant="text" style={{ color: 'black' }}>About</Button>

                <Select labelId="label" id="select" value="Shop">
                    <MenuItem value="All Products">All Products</MenuItem>
                    <MenuItem value="Shop Items">Shop Items</MenuItem>
                    <MenuItem value="New Arrivals">New Arrivals</MenuItem>
                    <MenuItem value="Shop" style={{ display: "none" }}>Shop</MenuItem>
                </Select>

                <Badge badgeContent= {count} color="secondary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} style={{ color: 'black', fontSize: "22px", marginLeft: "570px", marginTop: "20px", border: '1px solid black', padding: "8px", textAlign: "center", justifyContent: "center", borderRadius: "5px" }}>
                    <ShoppingCartIcon />Cart
                </Badge>

            </Stack>
        </div>
        <div style={{backgroundColor:'black',height:'300px'}}>
            <div style={{color:'white',fontSize:'60px',fontWeight:'bold',paddingTop:'90px'}}>Shop in style</div>
            <div style={{color:'gray',fontSize:'20px'}}>With this shop home page Template</div>
        </div>
        <Grid container spacing={2} style={{ paddingTop: '50px' }}>
                <Grid item xs={3}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '60px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Fancy Product</span><br></br>
                        <span style={{ padding: '30px' }}>$40.00-$50.00</span><br></br><br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }}>View Option</Button>
                    </Grid>

                </Grid>
                <Grid item xs={3}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '60px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Item</span><br></br>
                        <Rating name="full-rating" defaultValue={5} precision={0.5} /><br></br>
                        <strike>$20.00</strike>$18.00<br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} id="1" onClick={(e)=>toggle(e)} >Add to cart</Button>
                    </Grid>

                </Grid>
                <Grid item xs={3}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '60px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Sale Item</span><br></br>
                        <strike>$50.00</strike>$25.00<br></br><br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} id="2" onClick={(e)=>toggle(e)}>Add to cart</Button>
                    </Grid>

                </Grid>
                <Grid item xs={3} style={{ paddingRight: '60px' }}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '40px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Popular Item</span><br></br>
                        <Rating name="full-rating" defaultValue={5} precision={0.5} /><br></br>
                        <span style={{ padding: '30px' }}>$40.00</span><br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} id="1" onClick={(e)=>toggle(e)} >Add to cart</Button>
                    </Grid>

                </Grid>
                <Grid item xs={3} style={{ marginTop: '20px' }}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '60px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Sale Item</span><br></br>
                        <strike>$50.00</strike>$25.00<br></br><br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} onClick={(e)=>toggle(e)}>Add to cart</Button>
                    </Grid>

                </Grid>

                <Grid item xs={3} style={{ marginTop: '20px' }}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '60px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Fancy Product</span><br></br>
                        <span style={{ padding: '30px' }}>$120.00-$280.00</span><br></br><br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }}>View Options</Button>
                    </Grid>

                </Grid>
                <Grid item xs={3} style={{ marginTop: '20px' }}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '60px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Item</span><br></br>
                        <Rating name="full-rating" defaultValue={5} precision={0.5} /><br></br>
                        <strike>$20.00</strike>$18.00<br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} onClick={(e)=>toggle(e)} >Add to cart</Button>

                    </Grid>

                </Grid>
                <Grid item xs={3} style={{ paddingRight: '60px', marginTop: '20px', marginBottom: '50px' }}>

                    <img src={img} style={{ height: '150px', widht: '220px', marginLeft: '40px' }}></img>

                    <Grid style={{ height: '180px', width: '224px', border: '1px solid black', marginLeft: '40px', marginTop: '-5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Popular Item</span><br></br>
                        <Rating name="full-rating" defaultValue={5} precision={0.5} /><br></br>
                        <span style={{ padding: '30px' }}>$40.00</span><br></br><br></br>
                        <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} onClick={(e)=>toggle(e)} >Add to cart</Button>
                    </Grid>

                </Grid>





            </Grid></>
    )
}

