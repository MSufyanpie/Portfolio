
import { AppBar, Button, IconButton,  Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Drawer from './Drawer'
import DrawerComponent from './Drawer'


export default function MuiNavbar() {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const theme=useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return (
   <AppBar sx={{backgroundColor:'black'}} >
    <Toolbar   >
        <Typography sx={{flexGrow:1}}>
        <IconButton  >
            {/* <Image  src='src\assets\mylogo.png' height={'90px'} width={'200px'}></Image> */}
        <Typography
        sx={{  background: "linear-gradient(to right bottom, #fcc658, #ab7303)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontSize:'35px',
        fontFamily:'Monospace'
      }}
      
        fontWeight={1000} variant='h1' > MUHAMMAD SUFYAN</Typography>
        </IconButton>
        </Typography>
          
          {isMobile?<DrawerComponent/>:(<>
          
        <Stack spacing={2} direction={'row'}>

<Link 
style={{textDecoration:'none',}} 
onClick={()=>scrollToSection("#section1")}
to={"/#section1"}
>
<Button sx={{color:'white',fontWeight:'bold'}} >Home</Button></Link>

  <Link  
  onClick={()=>scrollToSection("#section2")} 
  style={{textDecoration:'none'}}
  to={"/#section2"}
  >
  <Button sx={{color:'white',fontWeight:'bold'}} >   About
  </Button></Link> 

  <Link 
  style={{textDecoration:'none'}}
  onClick={()=>scrollToSection("#section3")} 
  to={"/#section3"}
  >
    <Button sx={{color:'white',fontWeight:'bold'}} >Services</Button></Link> 

    
  <Link 
  style={{textDecoration:'none'}}
  onClick={()=>scrollToSection("#section4")} 
  to={"/#section4"}
  >
    <Button sx={{color:'white',fontWeight:'bold'}} >Skills</Button></Link> 

   <Link style={{textDecoration:'none'}}
    onClick={()=>scrollToSection("#section5")} 
    to={"/#section5"} >

   <Button sx={{color:'white',fontWeight:'bold'}}>Projects</Button></Link> 


   <Link style={{textDecoration:'none'}}
    onClick={()=>scrollToSection("#section6")} 
    to={"/#section6"}
   >
   <Button  sx={{color:'white',fontWeight:'bold'}} >Contact </Button></Link> 
  

   
   
</Stack>
          </>)}

    </Toolbar>
   </AppBar>
  )
}
