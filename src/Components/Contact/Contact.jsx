import React from 'react'
import NavBar from '../Navbar/navbar'
import { Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import { Form } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
      <Stack>
     <Typography variant='h3' textAlign={'center'}>
        Feel Free to Contact Me.
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
      <Stack m={'auto'} px={5} boxShadow={5} width={'50%'} sx={{backgroundColor:'white'}}>
      <Form  
      action='https://formspree.io/f/xpzgrlor' method='POST'
       >
      
      <Stack px={2} direction={'column'} spacing={4} >
      <Typography textAlign={'center'} variant='h4'>Contact</Typography>
      <TextField name='name' size='small'  label='Name' required/>
         <TextField name='Email' type='email' size='small' label='Email' required/>
        <TextField name='subject' size='small' label='Subject' required/>
        <TextField name='message'  multiline maxRows={4} label='Message' required />
       
        </Stack><br/>
        <Typography textAlign={'center'}>
        <Button type='submit' sx={{marginTop:'2%',marginLeft:'2%'}} variant='contained' color='success' size='large'>Send</Button>
        <Button sx={{marginTop:'2%',marginLeft:'2%'}} variant='contained' color='error' size='large'>Reset</Button></Typography>
       
      </Form><br/>
      </Stack>
      <br/>
    </div>
  )
}
