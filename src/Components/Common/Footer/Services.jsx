import { Box, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'

export const Services = () => {
  return (
    <div>
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
    </div>
  )
}
