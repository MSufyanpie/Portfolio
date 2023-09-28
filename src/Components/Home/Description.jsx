import React, { Component } from 'react'
import './Description.css'
import { Box, Button, Stack, Typography } from '@mui/material'

import { Image } from 'react-bootstrap'



export default class Description extends Component {
  render() {
    return (
      <Stack px={{xs:4,md:8}} spacing={{xs:7,md:35}} direction={{xs:'column',md:'row'}}>
      <Box width={{xs:'100%',md:'420px'}}>
        <Stack spacing={2} direction={'column'}>
        <Typography variant='h3' sx={{color:'whitesmoke'}} >
          I'm
        </Typography>
        <Typography  variant='h2'  fontWeight={'bold'} color={'white'} >
          Muhammad Sufyan
        </Typography>
        <Typography variant='body2' gutterBottom sx={{color:'whitesmoke'}} fontWeight={'bold'}>
        Professional React JS Developer with a strong interest in designing user-friendly websites.
        </Typography>  
        </Stack><br/>
        <Stack direction={'row'} spacing={2}>
        <Button   sx={{fontWeight:'bold',borderRadius:'15px',":hover":{
  opacity:'1',
  transition:'0.8s opacity ease-in-out',
  
        },

        background:'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);'}}
         variant='contained'  > About Me</Button>
        <Button  sx={{borderRadius:'15px',fontWeight:'bold',color:'black',
       backgroundColor: 'white',
       borderRadius: '15px',
       background: 'linear-gradient(90deg, #fcff9e 0%, #c67700 100%)',
       animation: 'gradient 2.5s infinite 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.2) forwards',
      }} variant='contained' >My Projects</Button>
        </Stack>
      </Box>
      <Image src='src\assets\home-img.png' height={300} width={{xs:300,md:500}} ></Image><br/>
      </Stack>

      

      
    )
  }
}
