import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {DiHtml5,DiCss3Full,DiBootstrap,DiReact,DiJavascript} from 'react-icons/di'


import  {SiTypescript} from 'react-icons/si'
import SkillsDesign from "./SkillsDesign";
export default function Skills() {
  const skills=[
    {
      icon:<DiHtml5/>,
      title:'HTML5',
      progress:90
    },
    {
      icon:<DiCss3Full/>,
           title:'CSS3',
      progress:90
    },
    {
      icon:<DiBootstrap/>,
      title:'BOOTSTRAP',
      progress:80
    },
    {
      icon:<DiJavascript/>,
      title:'JAVASCRIPT',
      progress:80
    },
    {
      icon:<DiReact/>,
      title:'REACT',
      progress:80
    },
    {
      icon:<SiTypescript/>,
      title:'TYPESCRIPT',
      progress:75
    }
  ]
  return (
  <div>
    <Stack>
      <Typography variant='h2' textAlign={'center'} color={'whitesmoke'} fontWeight={'bold'}>
        My Skills
      </Typography>
      <hr style={{width:'20%',color:'green',border:'2px solid green',alignSelf:'center'}} /></Stack><br/>
      <Grid
                container
                spacing={2}
                direction="row"
                px={10}
                

            >

    {skills.map((data,index)=>{
      return(
        <Grid item xs={12} sm={6} md={4}>
        <SkillsDesign
        icon={data.icon}
        title={data.title}
        progress={data.progress}
        />
        </Grid>
      )
    })}
    </Grid><br/><br/>
  
    </div>
  )
};
