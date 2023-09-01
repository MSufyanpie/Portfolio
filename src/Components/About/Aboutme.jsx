import React from 'react'
import NavBar from '../Navbar/navbar'
import { Box, Stack, Typography } from '@mui/material'
import { StraightOutlined } from '@mui/icons-material'

export default function Aboutme() {
  return (
  <Stack spacing={5}>
    <Typography variant='h3' color={'#ed6c02'} textAlign={'center'}>About Me</Typography>
    <Stack px={10}>
    <Box width={'500px'}>
    <Typography color={'wheat'} variant='h4' fontWeight={600}>
    Front-end React JS
    </Typography>
    <Typography color={'wheat'} variant='h4' fontWeight={600}>
    Developer with a
    </Typography>
    <Typography color={'wheat'} variant='h4' fontWeight={600}>
    Passion for User-
    </Typography>
    <Typography color={'wheat'} variant='h4' fontWeight={600} gutterBottom>
    friendly Websites
    </Typography>

    <Typography variant='body1' color={'whitesmoke'}>
    I am a professional Front-end React JS Developer with a strong dedication to 
    crafting user-friendly websites. My expertise lies in creating seamless user
     experiences through the implementation of ReactJS. I have a deep passion for 
     staying updated with the latest industry trends and technologies. 
     
    I ensure that all my projects are executed with precision and attention to detail.
    </Typography>
    </Box>
    </Stack>
  </Stack>
  )
}
