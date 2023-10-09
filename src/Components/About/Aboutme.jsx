import React from 'react'
import NavBar from '../Common/Navbar/navbar'
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material'
import { Image } from 'react-bootstrap'
import './About.css'


export default function Aboutme() {
  return (
    <div className='image'>
      
       <Typography  variant='h2'  textAlign={'center'} sx={{color:'whitesmoke'}} fontWeight={'bold'}>About Me</Typography><br/>
       {/* <Box sx={{float:'right'}} marginBottom={'20%'}> */}
  
  {/* </Box> */}
    <Stack direction={'row'}  spacing={45} marginTop={'4%'} px={{xs:2,md:10}}>
      
  
   
    
    <Box width={{xs:'100%',md:600}} px={10}>
    <Typography  sx={{color:'whitesmoke'}}    variant='h4' fontWeight={600}>
    Front-end React JS
    </Typography>
    <Typography   sx={{color:'whitesmoke'}}  variant='h4' fontWeight={600}>
    Developer with a
    </Typography>
    <Typography   sx={{color:'whitesmoke'}}  variant='h4' fontWeight={600}>
    Passion for User-
    </Typography>
    <Typography   sx={{color:'whitesmoke'}}  variant='h4' fontWeight={600} gutterBottom>
    friendly Websites
    </Typography>
    <hr style={{width:'10%',color:'green',border:'2px solid green'}}/>
    
    <br/>

    <Typography variant='body1' textAlign={'justify'} color={'white'} gutterBottom >
    I am a professional Front-end React JS Developer with a strong dedication to 
    crafting user-friendly websites. My expertise lies in creating seamless user
     experiences through the implementation of ReactJS. I have a deep passion for 
     staying updated with the latest industry trends and technologies. 
     
    I ensure that all my projects are executed with precision and attention to detail.
    </Typography><br/>
    <Button sx={{ background: 'linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376)',borderRadius:'15px',fontWeight:'bold'}}  variant='contained'>Contact Me</Button>
    </Box>
    <Box paddingBottom={'5%'}>
    <Image  style={{height:'530px',width:'450px'}} src='src\assets\sufyan.png' ></Image></Box>
    
    
 
  
  
  </Stack>
 
  </div>
  )
}
