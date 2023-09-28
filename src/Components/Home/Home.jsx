import React from 'react'
import NavBar from '../Common/Navbar/navbar'
import Description from './Description'
import { Stack } from '@mui/material'

export default function Home() {
  return (
    <Stack spacing={30} direction={'column'}>
        <NavBar></NavBar>
        <Description></Description><br/>
        </Stack>
  )
}
