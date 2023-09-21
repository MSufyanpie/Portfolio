import React, { Component } from 'react'
import './Description.css'
import { Box, Button, Stack, Typography } from '@mui/material'

import { Image } from 'react-bootstrap'



export default class Description extends Component {
  render() {
    return (
      <Stack px={8} spacing={35} direction={'row'}>
      <Box width={'400px'}>
        <Stack spacing={2} direction={'column'}>
        <Typography variant='h2' >
          I'm
        </Typography>
        <Typography variant='h2'  fontWeight={600} q >
          Muhammad Sufyan
        </Typography>
        <Typography variant='body3' gutterBottom q>
        Professional React JS Developer with a strong interest in designing user-friendly websites.
        </Typography>
        <Button  sx={{width:130}} variant='contained' size='small' > About Me</Button>
       
        </Stack>
       
      </Box>
      <Image src='src\assets\home-img.png' height={300} width={500} ></Image>
      </Stack>

      

      
    )
  }
}
