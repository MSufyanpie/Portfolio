import React from 'react'
import NavBar from '../Navbar/navbar'
import { Stack, Typography } from '@mui/material'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'
import ServicesDesign from './ServicesDesign'
export default function Services() {

  const services=[
    {
     image:service1,
     title:'Export Performance Optimization for Your Website ',
     description:'I specialize in optimizing website performance to enhance user experience and ensure optimal loading times.',
  },
  
    {
      image:service2,
      title:'Expert React JS Developer for Custom UI Development',
      description:'I specialize in custom UI development, leveraging my expertise as a front-end React JS developer to create user-friendly websites.',
  },
  {
    image:service3,
    title:'Expert Front-end Developer for Responsive Websites',
    description:'I specialize in creating responsive designs, ensuring that they adapt seamlessly to all devices and provide a user-friendly experience.',
}

]
  return (
    <div>
      <Stack>
      <Typography variant='h3' textAlign={'center'}>
        What Services I'm Providing
      </Typography>
      <hr style={{width:'20%',color:'green',border:'2px solid green',alignSelf:'center'}} /></Stack><br/>
      <Stack spacing={3} direction={'row'} px={10}  >
      {services.map((data,index)=>{
        return(
          <ServicesDesign 
          id={index}
          image={data.image}
          title={data.title}
          description={data.description}
          />

          
        )
      })}
      </Stack><br/>
      </div>
  )
}
