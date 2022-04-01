import logo from './logo.svg';
import './App.css';
import {Box,Grid,Button} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Close';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '700px',
        backgroundColor: 'primary.dark', 
     
       marginTop:'50px'
      }}
     
    >
      <Grid container spacing={1}>
        <Grid item xs={3} style={{backgroundColor:'white',margin :'50px',height:'600px',borderRadius:'20px',textAlign:'center'}}>
        <span style={{fontWeight:'bold',fontSize:'15px',color:'gray'}}>FREE</span><br></br>
        <span style={{fontSize:'40px',fontWeight:'bold'}}>$0</span><span>/month</span><br></br><br></br>
        <hr />
        <ul style={{listStyle: 'none',fontSize:'17px',textAlign:'start'}}>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Single User</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>5GB Storage</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Unlimited Public Projects</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Community Access</span>  
          </li><br></br>
          <li style={{color:'gray'}} >
          <ClearIcon fontSize="small" />
          <span style={{marginLeft:'5px'}}>Unlimited Private Projects</span>  
          </li><br></br>
          <li style={{color:'gray'}}>
          <ClearIcon fontSize="small" />
          <span style={{marginLeft:'5px'}}>Dedicated Phone Support</span>  
          </li><br></br>
          <li style={{color:'gray'}}>
          <ClearIcon fontSize="small" />
          <span style={{marginLeft:'5px'}}>Free Subdomain</span>  
          </li><br></br>
          <li style={{color:'gray'}}>
          <ClearIcon fontSize="small" />
          <span style={{marginLeft:'5px'}}>Monthly Status Reports</span>  
          </li><br></br>
          <Button variant="contained" size="large" style={{width:'85%',borderRadius:'20px',height:'50px'}}>
          Button
        </Button>
          
        </ul>
        </Grid>
        <Grid item xs={3} style={{backgroundColor:'white',margin :'50px',height:'600px',borderRadius:'20px',textAlign:'center'}}>
        <span style={{fontWeight:'bold',fontSize:'15px',color:'gray'}}>PLUS</span><br></br>
        <span style={{fontSize:'40px',fontWeight:'bold'}}>$9</span><span>/month</span><br></br><br></br>
        <hr />
        <ul style={{listStyle: 'none',fontSize:'17px',textAlign:'start'}}>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px',fontWeight:'bold'}}>5 Users</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>50GB Storage</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Unlimited Public Projects</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Community Access</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Unlimited Private Projects</span>  
          </li><br></br>
          <li>
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Dedicated Phone Support</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Free Subdomain</span>  
          </li><br></br>
          <li style={{color:'gray'}}>
          <ClearIcon fontSize="small" />
          <span style={{marginLeft:'5px'}}>Monthly Status Reports</span>  
          </li><br></br>
          <Button variant="contained" size="large" style={{width:'85%',borderRadius:'20px',height:'50px'}}>
          Button
        </Button>
          
        </ul>
        </Grid>
        <Grid item xs={3} style={{backgroundColor:'white',margin :'50px',height:'600px',borderRadius:'20px',textAlign:'center'}}>
        <span style={{fontWeight:'bold',fontSize:'15px',color:'gray'}}>PRO</span><br></br>
        <span style={{fontSize:'40px',fontWeight:'bold'}}>$49</span><span>/month</span><br></br><br></br>
        <hr />
        <ul style={{listStyle: 'none',fontSize:'17px',textAlign:'start'}}>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px',fontWeight:'bold'}}>Unlimited Users</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>150GB Storage</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Unlimited Public Projects</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Community Access</span>  
          </li><br></br>
          <li>
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Unlimited Private Projects</span>  
          </li><br></br>
          <li>
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Dedicated Phone Support</span>  
          </li><br></br>
          <li>
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}><b>Unlimited</b> Free Subdomain</span>  
          </li><br></br>
          <li >
          <CheckIcon fontSize="small" fontWeight="bold" />
          <span style={{marginLeft:'5px'}}>Monthly Status Reports</span>  
          </li><br></br>
          <Button variant="contained" size="large" style={{width:'85%',borderRadius:'20px',height:'50px'}}>
          Button
        </Button>
          
        </ul>
        </Grid>
        
      </Grid>
    </Box>
    

  );
}

export default App;
