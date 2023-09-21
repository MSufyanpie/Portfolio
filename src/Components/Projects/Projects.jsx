import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import {DiHtml5,DiCss3Full,DiBootstrap,DiReact,DiJavascript, DiJsBadge, DiFirebase ,} from 'react-icons/di'
import ProjectsDesign from './ProjectsDesign'
export default function Projects() {
    const projects=[
        {
        date:'2023',
        project:'Todo-App',
        DevelopedAt:'PieCyfer',
        Technology1:<DiHtml5 color='orange'/>,
        Technology2:<DiCss3Full color='blue' />,
        Technology3:<DiJsBadge color='gold' />,
        Technology4:<DiReact color='aqua'/>,
    },
    {
        date:'2023',
        project:'Pet-Bonz',
        DevelopedAt:'PieCyfer',
        Technology1:<DiHtml5 color='orange'/>,
        Technology2:<DiCss3Full color='blue' />,
        Technology3:<DiJsBadge color='gold' />,
        Technology4:<DiReact color='aqua'/>,
    },
    {
        date:'2023',
        project:'Ghar-Banao',
        DevelopedAt:'MUL',
        Technology1:<DiHtml5 color='orange'/>,
        Technology2:<DiCss3Full color='blue' />,
        Technology3:<DiJsBadge color='gold' />,
        Technology4:<DiBootstrap color='#5ebac4'/>,
    },
    
    {
        date:'2023',
        project:'E-Commerce Store',
        DevelopedAt:'PieCyfer',
        Technology1:<DiHtml5 color='orange'/>,
        Technology2:<DiCss3Full color='blue' />,
        Technology3:<DiJsBadge color='gold' />,
        Technology4:<DiReact color='aqua'/>,
        Technology5:<DiFirebase color='orange'/>
    }
]
  return (
    <div >
        
        <Stack>
      <Typography variant='h3' textAlign={'center'}>
        My Projects
      </Typography>
      <hr style={{width:'11%',color:'green',border:'2px solid green',alignSelf:'center'}} /></Stack><br/>
    <Stack px={10}>
    <TableContainer sx={{border:'1px solid #a63243',borderRadius:'10px'}}>
    <Table sx={{}}>
        
        <TableHead sx={{backgroundColor:'#a63243'}}>

            <TableRow>
                
                <TableCell width={'25%'}>
                <Typography color={'gold'}  variant='h5' fontWeight={'bold'}>   Year</Typography > 
                </TableCell>
                <TableCell  width={'25%'}>
                <Typography color={'gold'}  variant='h5' fontWeight={'bold'}>  Project </Typography>
                </TableCell>
                <TableCell  width={'25%'}>
                <Typography color={'gold'} variant='h5' fontWeight={'bold'}>   Created At </Typography>
                    </TableCell>
                <TableCell  width={'25%'}>
                <Typography color={'gold'} variant='h5' fontWeight={'bold'}> Technologies Used </Typography>
                    </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {projects.map((data,index)=>{
                return (
                    <ProjectsDesign
                    date={data.date}
                    project={data.project}
                    developedAt={data.DevelopedAt}
                    logo1={data.Technology1}
                    logo2={data.Technology2}
                    logo3={data.Technology3}
                    logo4={data.Technology4}
                    logo5={data.Technology5}
                    />
                )
            })}
        </TableBody>
        
    </Table>
    </TableContainer>
    </Stack><br/>

    </div>
  )
}
