import { Call, Mail } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const HaveQuestions = () => {
  return (
    <div>
          <Box>
        <Typography gutterBottom variant='h5' fontWeight={'bold'} color={'white'}>HAVE QUESTIONS?</Typography><br/>
        <Stack direction={'column'} spacing={5}>
        <Typography gutterBottom color={'#b0ada4'} variant='h6' ><Call/> 03364019914</Typography>
        <Typography color={'#b0ada4'} variant='h6' ><Mail/> sufi.sufyan121@gmail.com</Typography>
        </Stack>
        </Box>
    </div>
  )
}
