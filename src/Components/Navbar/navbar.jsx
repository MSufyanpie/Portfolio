
import { AppBar, Button, IconButton,  Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'

import { Link } from 'react-router-dom'


export default function MuiNavbar() {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
   <AppBar sx={{backgroundColor:'white'}} >
    <Toolbar   >
        <Typography sx={{flexGrow:1}}>
        <IconButton  >
            <Image  src='src\assets\mylogo.png' height={'90px'} width={'200px'}></Image>
        </IconButton>
        </Typography>
        

        <Stack spacing={2} direction={'row'}>

        <Link 
        style={{textDecoration:'none'}} 
        onClick={()=>scrollToSection("#section1")}
        to={"/#section1"}
        >
        <Button >Home</Button></Link>

          <Link  
          onClick={()=>scrollToSection("#section2")} 
          style={{textDecoration:'none'}}
          to={"/#section2"}
          >
          <Button >   About
          </Button></Link> 

          <Link 
          style={{textDecoration:'none'}}
          onClick={()=>scrollToSection("#section3")} 
          to={"/#section3"}
          >
            <Button >Services</Button></Link> 

            
          <Link 
          style={{textDecoration:'none'}}
          onClick={()=>scrollToSection("#section4")} 
          to={"/#section4"}
          >
            <Button >Skills</Button></Link> 

           <Link style={{textDecoration:'none'}}
            onClick={()=>scrollToSection("#section5")} 
            to={"/#section5"} >

           <Button>Projects</Button></Link> 


           <Link style={{textDecoration:'none'}}
            onClick={()=>scrollToSection("#section6")} 
            to={"/#section6"}
           >
           <Button   >Contact </Button></Link> 
           <Button variant='contained' color='error'>Hire Me</Button>

           
           
        </Stack>
    </Toolbar>
   </AppBar>
  )
}
