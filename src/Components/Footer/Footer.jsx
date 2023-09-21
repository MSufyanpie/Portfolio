import { Facebook, GitHub, Instagram, LinkedIn, Phone } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function Footer() {
  return (
    <Stack direction={'row'} sx={{backgroundColor:'black'}} py={3} px={3} >
         <Typography flexGrow={0.5}  >
            
      <IconButton >
            <Image  src='src\assets\mylogo.png' height={'80px'} width={'200px'}></Image>
        </IconButton>
        </Typography>
        <Typography color={'white'} flexGrow={0.5} variant='h5'>
            Follow Me
            <Stack direction={'row'} spacing={1}>
      <Typography color={'white'} variant='h4'> <Facebook></Facebook></Typography> 
      <Typography color={'white'} variant='h4'> <Instagram></Instagram></Typography> 
      <Typography color={'white'} variant='h4'> <LinkedIn></LinkedIn></Typography>
      <Typography color={'white'} variant='h4' > <GitHub></GitHub></Typography>
      </Stack>
       </Typography>
     
        <Stack direction={'column'} >
        <Typography gutterBottom variant='h6' color={'white'} >
            <Phone></Phone>
            Call Me?
        </Typography>
        <Typography color={'white'} variant='body1'>
         03364019914
        </Typography>
        </Stack>
        
    </Stack>
  )
}
