import { ArrowRight, Call, Facebook, GitHub, Instagram, LinkedIn, Mail, Phone, PhoneAndroidSharp } from '@mui/icons-material'
import { Box, Button, IconButton, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box px={20} marginTop={'5%'}>
      <Stack direction={'row'} spacing={20}>
        <Box>
          
         <Typography gutterBottom variant='h5' fontWeight={'bold'} color={'white'}>ABOUT</Typography><br/>
         <Typography  variant='h6'  color={'#b0ada4'}>Front-end React JS/TS Developer with a passion for creating user- friendly Websites while ensuring a pleasant user experience.</Typography><br/>
        <Stack direction={'row'} spacing={3} marginTop={'10%'}>
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'3vh',width:'4vh',}}>
         <GitHub sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton>
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'3vh',width:'3vh',}}>
         <LinkedIn sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton>
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'3vh',width:'3vh',}}>
         <Facebook sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton>
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'3vh',width:'3vh',}}>
         <Instagram sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton>
        </Stack>
        </Box>
        <Box>
        <Typography marginLeft={'7%'} gutterBottom variant='h5' fontWeight={'bold'} color={'white'}>LINKS</Typography><br/>
        <Stack direction={'column'}>
        <Link style={{textDecoration:'none'}}
            // onClick={()=>scrollToSection("#section6")} 
            // to={"/#section6"}
           >
           <Button  sx={{color:'#b0ada4',}} ><ArrowRight/>HOME </Button></Link> 
           <Link style={{textDecoration:'none'}}
            // onClick={()=>scrollToSection("#section6")} 
            // to={"/#section6"}
           >
           <Button  sx={{color:'#b0ada4',}} ><ArrowRight/>ABOUT </Button></Link> 
           <Link style={{textDecoration:'none'}}
            // onClick={()=>scrollToSection("#section6")} 
            // to={"/#section6"}
           >
           <Button  sx={{color:'#b0ada4',}} ><ArrowRight/>SERVICES </Button></Link> 
           <Link style={{textDecoration:'none'}}
            // onClick={()=>scrollToSection("#section6")} 
            // to={"/#section6"}
           >
           <Button  sx={{color:'#b0ada4',}} ><ArrowRight/>SKILLS </Button></Link> 
           <Link style={{textDecoration:'none'}}
            // onClick={()=>scrollToSection("#section6")} 
            // to={"/#section6"}
           >
           <Button  sx={{color:'#b0ada4',}} ><ArrowRight/>PROJECTS </Button></Link> 
           <Link style={{textDecoration:'none'}}
            // onClick={()=>scrollToSection("#section6")} 
            // to={"/#section6"}
           >
           <Button  sx={{color:'#b0ada4',}} ><ArrowRight/>CONTACT </Button></Link>
           </Stack>
        </Box>
        <Box>
        <Typography gutterBottom variant='h5' fontWeight={'bold'} color={'white'}>SERVICES</Typography><br/>
        <Stack direction={'column'} spacing={1}>
          <List>
            <ListItem> 
            
              <Typography color={'#b0ada4'} variant='body1'>Web Development</Typography></ListItem>
       
            <ListItem> <Typography color={'#b0ada4'} variant='body1'>Web Designing</Typography></ListItem>
            <ListItem> <Typography color={'#b0ada4'} variant='body1'>Performance Optimization</Typography></ListItem>
            <ListItem> <Typography color={'#b0ada4'} variant='body1'>Responsive Designs</Typography></ListItem>
            </List></Stack>
        </Box>
        <Box>
        <Typography gutterBottom variant='h5' fontWeight={'bold'} color={'white'}>HAVE QUESTIONS?</Typography><br/>
        <Stack direction={'column'} spacing={5}>
        <Typography gutterBottom color={'#b0ada4'} variant='h6' ><Call/> 03364019914</Typography>
        <Typography color={'#b0ada4'} variant='h6' ><Mail/> sufi.sufyan121@gmail.com</Typography>
        </Stack>
        </Box>
      </Stack><br/>
      <Typography marginTop={'3%'} color={'#69706b'} variant='h6'  textAlign={'center'}>
      Copyright © 2023 | Muhammad Sufyan | All rights reserved | This portfolio is made with ❤️ by Muhammad Sufyan
      </Typography>
    </Box>
       
  )
}
