import React from 'react'
import NavBar from '../Navbar/navbar'
import { Stack, Typography } from '@mui/material'
import { StraightOutlined } from '@mui/icons-material'

export default function Aboutme() {
  return (
  <Stack>
    <Typography variant='h3' color={'wheat'}>About Me</Typography>
    <StraightOutlined></StraightOutlined>
  </Stack>
  )
}
