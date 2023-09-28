import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {DiHtml5,DiCss3Full,DiBootstrap,DiReact,DiJavascript} from 'react-icons/di'


import  {SiTypescript} from 'react-icons/si'
import SkillsDesign from "./SkillsDesign";
export default function Skills() {
  const skills=[
    {
      icon:<DiHtml5/>,
      title:'HTML',
      description:'HTML is the backbone of web development. I utilize it to craft the fundamental structure and content of web pages, ensuring accessibility and semantic markup.'
    },
    {
      icon:<DiCss3Full/>,
           title:'CSS',
      description:'CSS empowers me to style and design web content with precision. I use it to create visually appealing and responsive layouts, enhancing user experiences.'
    },
    {
      icon:<DiBootstrap/>,
      title:'Bootstrap',
      description:'Leveraging Bootstraps CSS framework, I expedite web development by seamlessly integrating pre-built components and responsive grids, resulting in efficient and mobile-friendly designs.'
    },
    {
      icon:<DiJavascript/>,
      title:'Javascript',
      description:'JavaScript breathes life into web applications. I employ it to add interactivity and dynamic behavior, enhancing user engagement and functionality.'
    },
    {
      icon:<DiReact/>,
      title:'React',
      description:'React is my go-to library for building interactive user interfaces. I harness its component-based architecture to create reusable UI elements and manage complex state seamlessly.'
    },
    {
      icon:<SiTypescript/>,
      title:'Typescript',
      description:'TypeScript elevates my JavaScript development by adding static typing and enhanced tooling. It helps me catch errors early and write more robust, maintainable code.'
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
        description={data.description}
        />
        </Grid>
      )
    })}
    </Grid><br/><br/>
  
    </div>
  )
};
