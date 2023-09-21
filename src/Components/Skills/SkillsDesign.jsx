import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function SkillsDesign({id,icon,title,description}) {
  return (
    <div>
    <Card variant='outlined' 
    sx={{height:'40vh',width:'100%'}}
    
    
    >
        
           
        
        <CardContent sx={{padding:'0'}}>
        <Stack direction={'column'} spacing={1} sx={{backgroundColor:'#a63243'}} py={1}>
       <Typography variant='h4' color={'gold'} textAlign={'center'} > {icon}</Typography>
        <Typography variant='h5'  color={'gold'} textAlign={'center'} gutterBottom>
            {title}
            </Typography></Stack><br/>
            <Typography variant='body2' textAlign={'justify'} px={3} fontWeight={'bold'} >
            {description}</Typography>
        </CardContent>
        
    </Card>
    </div>
  )
}
