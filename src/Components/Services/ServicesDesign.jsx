import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ServicesDesign({id,image,title,description}) {
  return (
    
        <Card sx={{width:'33%'}}
        >
            <CardMedia 
            sx={{height:280}}
            image={image}
            
            />        
        
        <CardContent>
            <Typography variant='h5' gutterBottom>
             {title}
            </Typography>
            <Typography variant='body1'>
             {description}
            </Typography>

        </CardContent>
        </Card>
  )
    
}
