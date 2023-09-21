import React from 'react'
import NavBar from '../Navbar/navbar'
import { Box, Button, Stack, Typography } from '@mui/material'



export default function Aboutme() {
  return (
    <div>
  <Stack spacing={5}>
    <Typography variant='h3'  textAlign={'center'}>About Me</Typography>
    <hr style={{width:'10%',alignSelf:'center',color:'green',border:'2px solid green'}} />
    <Stack px={10}>
    <Box width={'600px'}>
    <Typography    variant='h5' fontWeight={600}>
    Front-end React JS
    </Typography>
    <Typography    variant='h5' fontWeight={600}>
    Developer with a
    </Typography>
    <Typography    variant='h5' fontWeight={600}>
    Passion for User-
    </Typography>
    <Typography    variant='h5' fontWeight={600} gutterBottom>
    friendly Websites
    </Typography>
    <hr style={{width:'10%',color:'green',border:'2px solid green'}}/>
    
    <br/>

    <Typography variant='body2' textAlign={'justify'} gutterBottom >
    I am a professional Front-end React JS Developer with a strong dedication to 
    crafting user-friendly websites. My expertise lies in creating seamless user
     experiences through the implementation of ReactJS. I have a deep passion for 
     staying updated with the latest industry trends and technologies. 
     
    I ensure that all my projects are executed with precision and attention to detail.
    </Typography><br/>
    <Button size='small'  variant='contained'>Contact Me</Button>
    </Box>
   
    </Stack><br/>
    
  </Stack><br/>
  
  </div>
  )
}
