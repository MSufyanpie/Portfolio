import React, { Component } from "react";
import "./Description.css";
import { Box, Button, Stack, Typography } from "@mui/material";

import { Image } from "react-bootstrap";

export default class Description extends Component {
  render() {
    return (
      <Stack
        px={{ xs: 4, md: 17 }}
        spacing={{ xs: 7, md: 35 }}
        direction={{ xs: "column", md: "row" }}
      >
        <Box width={{ xs: "100%", md: "480px" }}>
          <Stack spacing={2} direction={"column"}>
            <Typography variant="h2" sx={{ color: "whitesmoke" }}>
              I'm
            </Typography>
            <Typography variant="h3" fontWeight={"1000"} 
            // color={"#ffbd39"}
            fontFamily={'sans-serif'} fontSize={'60px'}
            sx={{
              background: "linear-gradient(to right , #462523 0,#cb9b51 4%,#f6e27a 45%,#f6f2c0 50%,#f6e27a 55%,#cb9b51 78%, #462523 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            >
              MUHAMMAD SUFYAN
            </Typography>
            <br/>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "white" }}
              fontWeight={"bold"}
            >
              Professional React JS Developer with a strong interest in
              designing user-friendly websites.
            </Typography>
          </Stack>
          <br />
          <Stack direction={"row"} spacing={2} marginTop={'1%'}>
            <Button
            size="large"
              sx={{
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow:'1px 1px 1px solid white',
                backgroundColor:'#ffbd39',
                color:'black'
              }}
              variant="contained"
            >
              {" "}
              About Me
            </Button>
            <Button
            size="large"
              sx={{
                borderRadius: "15px",
                border:'1px solid white',
                color: "white",
                backgroundColor: "black",
                
              
              }}
              variant="contained"
            >
              My Projects
            </Button>
          </Stack>
        </Box>
        <Image
        className="img"
          src="src\assets\home-img.png"
          height={300}
          width={{ xs: 300, md: 500 }}
        ></Image>
        <br />
      </Stack>
    );
  }
}
