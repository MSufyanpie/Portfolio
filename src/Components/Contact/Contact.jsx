import React from 'react'
import NavBar from '../Common/Navbar/navbar'
import { Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import { Form } from 'react-bootstrap'
import { GitHub, Google, Instagram, LinkedIn, Send } from '@mui/icons-material'
import {RxReset} from 'react-icons/rx'
import {GrPowerReset} from 'react-icons/gr'
export default function Contact() {
  return (
    <div>
      <Stack>
     <Typography variant='h3' textAlign={'center'} color={'whitesmoke'} fontWeight={'bold'}>
        Let's Make Something Great Together!
      </Typography>
      <hr style={{width:'20%',color:'green',border:'2px solid green',alignSelf:'center'}} /></Stack><br/>
{/* 
      <form >
        <Stack px={30} direction={'column'} spacing={2} sx={{border:'1px solid black'}}>
        <TextField size='small' label='Name'/>
         <TextField size='small' label='Email'/>
        <TextField size='small' label='Subject'/>
        <TextField multiline label='Message' />
        </Stack>
      </form> */}
      <Stack m={'auto'} px={5} boxShadow={10} width={{xs:'95%',md:'50%'}} sx={{backgroundColor:'#59ABE3'}}>
      <Form  
      action='https://formspree.io/f/xpzgrlor' method='POST'
       >
      
      <Stack px={2} direction={'column'} spacing={4} marginTop={'2%'} >
      <Typography textAlign={'center'} variant='h4' fontWeight={'bold'} color={'white'} >GET IN TOUCH</Typography>
      <Stack direction={'row'} spacing={1}  paddingLeft={'39%'}>
        <Instagram sx={{color:'#d62976'}}/>
        <Google sx={{color:'gold'}}/>
        <GitHub/>
        <LinkedIn sx={{color:'blue'}}/>
      </Stack>
      <TextField  sx={{border:'2px solid white',borderRadius:'10px'}} name='name' size='small'  label='Name' required/>
         <TextField  sx={{border:'2px solid white',borderRadius:'10px',color:'white'}} name='Email' type='email' size='small' label='Email' required/>
        <TextField   sx={{border:'2px solid white',borderRadius:'10px'}} name='subject' size='small' label='Subject' required/>
        <TextField  sx={{border:'2px solid white',borderRadius:'10px'}} name='message'  multiline maxRows={4} label='Message' required />
       
        </Stack><br/>
        <Typography textAlign={'center'}>
        <Button  type='submit' sx={{marginTop:'2%',marginLeft:'2%',backgroundColor:'goldenrod',fontWeight:'bold'}} variant='contained' color='success' size='large'>Send<Send/></Button>
        <Button sx={{marginTop:'2%',marginLeft:'2%',color:'white',fontWeight:'bold'}} variant='contained' color='error' size='large'>Reset<GrPowerReset style={{color:'white'}}/></Button></Typography>
       
      </Form><br/>
      </Stack>
      <br/>
    </div>
  )
}
