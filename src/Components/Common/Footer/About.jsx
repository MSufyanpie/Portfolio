import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <div>
         <Box>
          
          <Typography gutterBottom variant='h5' fontWeight={'bold'} color={'white'}>ABOUT</Typography><br/>
          <Typography  variant='body1'  color={'#b0ada4'}>Front-end React JS/TS Developer with a passion for creating user- friendly Websites while ensuring a pleasant user experience.</Typography><br/>
         <Stack direction={'row'} spacing={3} marginTop={'7%'}>
         <IconButton size='large' sx={{backgroundColor:'black',height:'3vh',width:'4vh',}}>
          <GitHub sx={{color:'white'}} fontSize='large'/>   
         </IconButton>
         <IconButton size='large' sx={{backgroundColor:'white',height:'3.3vh',width:'3vh',}}>
          <LinkedIn sx={{color:'blue'}} fontSize='large'/>   
         </IconButton>
         <IconButton size='large' sx={{backgroundColor:'white',height:'3vh',width:'3vh',}}>
          <Facebook sx={{color:'blue'}} fontSize='large'/>   
         </IconButton>
         <IconButton size='large' sx={{backgroundColor:'black',height:'3vh',width:'3vh',}}>
          <Instagram sx={{color:'#d62976'}} fontSize='large'/>   
         </IconButton>
         </Stack>
         </Box>
    </div>
  )
}
