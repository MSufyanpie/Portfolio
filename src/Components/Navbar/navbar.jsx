import { CatchingPokemonOutlined } from '@mui/icons-material'
import { AppBar, Button, IconButton,  Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import Aboutme from '../About/Aboutme'
import { Link } from 'react-router-dom'

export default function MuiNavbar() {
  return (
   <AppBar sx={{backgroundColor:'black'}} >
    <Toolbar   >
        <Typography sx={{flexGrow:1}}>
        <IconButton  >
            <Image  src='src\assets\mylogo.png' height={'90px'} width={'200px'}></Image>
        </IconButton>
        </Typography>
        
        {/* <Typography variant='h6' sx={{flexGrow:1}}>
            Muhammad Sufyan
        </Typography> */}

        <Stack spacing={2} direction={'row'}>
         <Button color='warning'>  <Link to={'http://localhost:5175/About'}  sx={{textDecoration:'none'}} color='inherit'>About</Link></Button> 
         <Button color='warning'>  <Link sx={{textDecoration:'none'}} color='inherit'>Skills</Link></Button> 
         <Button color='warning'>  <Link sx={{textDecoration:'none'}} color='inherit'>Projects</Link></Button> 
         <Button color='warning'>  <Link sx={{textDecoration:'none'}} color='inherit'>Contact Me</Link></Button> 
        </Stack>
    </Toolbar>
   </AppBar>
  )
}

 