import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ServicesDesign({id,image,title,description}) {
  return (
        <Grid key={id} item xs={12} sm={6} md={4}>
        <Card sx={{":hover":{
          boxShadow:'1px 1px 1px 2px #ffbd39'
        }}} variant='outlined'
        >
            <CardMedia 
            sx={{height:280}}
            image={image}
            
            />        
        
        <CardContent sx={{backgroundColor:'#383831'}}>
            <Typography variant='h5' gutterBottom fontWeight={'bold'} color={'#ffbd39'}>
             {title}
            </Typography><br/>
            <Typography variant='body1' color={'white'} >
             {description}
            </Typography>

        </CardContent>
        </Card><br/>
        </Grid>
  )
    
}
