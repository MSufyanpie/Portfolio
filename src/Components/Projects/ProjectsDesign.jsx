import { TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function ProjectsDesign({date,project,developedAt,logo1,logo2,logo3,logo4,logo5}) {
  return (
    
      <TableRow sx={{}}>
      <TableCell sx={{fontWeight:'bold'}}>{date}</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>{project}</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>{developedAt}</TableCell>
      <TableCell sx={{fontWeight:'bold'}}><Typography variant='h3'>{logo1}{logo2}{logo3}{logo4}{logo5}</Typography></TableCell>
      
      </TableRow> 
    
  )
}
