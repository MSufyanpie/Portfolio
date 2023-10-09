import { LinkedIn, Mail, Phone } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

export const ContactIcons = () => {
  return (
    <Box width={'50%'} m={'auto'} paddingLeft={'3%'}>
    <Stack direction={'row'} spacing={11}>
        <Box>
        <Typography textAlign={'center'} >
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'12vh',width:'12vh',}}>
         <Phone sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton></Typography>
        <Typography textAlign={'center'} marginTop={'10%'} variant='h6' color={'white'}>
            Contact Number
        </Typography><br/>
        <Typography  textAlign={'center'} variant='h6' color={'white'}>
            03364019914
        </Typography>
        </Box>
        <Box>
     <Typography textAlign={'center'}>
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'12vh',width:'12vh',}}>
         <Mail sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton></Typography>
        <Typography textAlign={'center'} marginTop={'7%'} variant='h6' color={'white'}>
            Email Address
        </Typography><br/>
        <Typography variant='h6' color={'white'}>
           sufi.sufyan121@gmail.com
        </Typography>
        </Box>
        <Box>
        <Typography textAlign={'center'}>
        <IconButton size='large' sx={{backgroundColor:'#383831',height:'12vh',width:'12vh',}}>
         <LinkedIn sx={{color:'#ffbd39'}} fontSize='large'/>   
        </IconButton></Typography>
        <Typography textAlign={'center'} marginTop={'10%'} variant='h6' color={'white'} >
            LinkedIn
        </Typography><br/>
        <Typography variant='h6' color={'white'}>
          Muhammad Sufyan
        </Typography>
        </Box>
    </Stack>    <br/>

    </Box>
  )
}
