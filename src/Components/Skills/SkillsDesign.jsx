import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function SkillsDesign({id,icon,title,description}) {
  return (
    <div>
    <Card variant='outlined' 
    sx={{height:'33vh',width:'100%',backgroundColor:'#383831',":hover":{
      backgroundColor:'maroon',color:'black'
    }}}
    
    
    >
        
           
        
        <CardContent sx={{padding:'0'}}>
        {/* <Stack direction={'column'} spacing={1} sx={{backgroundColor:'#a63243'}} py={1}> */}
       <Typography variant='h2' color={'#ffbd39'} textAlign={'center'} > {icon}</Typography>
       
            {/* </Stack> */}
            <br/>
            <br/>
            <Stack>
            <Typography variant='h6'  color={'white'} textAlign={'center'} fontWeight={'bold'}>
            {title}
          
            </Typography>
            <hr style={{color:'#ffbd39',border:'1px solid #ffbd39',width:'20%',alignSelf:'center'}}/>
            </Stack>
        </CardContent>
        
    </Card><br/>
    </div>
  )
}
