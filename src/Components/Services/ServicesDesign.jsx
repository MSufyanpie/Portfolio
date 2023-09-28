import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ServicesDesign({id,image,title,description}) {
  return (
        <Grid item xs={12} sm={6} md={4}>
        <Card variant='outlined'
        >
            <CardMedia 
            sx={{height:280}}
            image={image}
            
            />        
        
        <CardContent sx={{backgroundColor:'#e9ecf2'}}>
            <Typography variant='h5' gutterBottom fontWeight={'bold'}>
             {title}
            </Typography><br/>
            <Typography variant='body1'>
             {description}
            </Typography>

        </CardContent>
        </Card><br/>
        </Grid>
  )
    
}
