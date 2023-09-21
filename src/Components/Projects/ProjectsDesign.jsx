import { TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function ProjectsDesign({date,project,developedAt,logo1,logo2,logo3,logo4}) {
  return (
    
      <TableRow sx={{}}>
      <TableCell>{date}</TableCell>
      <TableCell>{project}</TableCell>
      <TableCell>{developedAt}</TableCell>
      <TableCell><Typography variant='h3'>{logo1}{logo2}{logo3}{logo4}</Typography></TableCell>
      
      </TableRow> 
    
  )
}
