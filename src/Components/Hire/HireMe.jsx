import React from "react";
import "./hire.css";
import { Box, Button, Stack, Typography } from "@mui/material";
export const HireMe = () => {
  return (
    <div className="bg-img">
      <Box m={"auto"} width={{xs:'100%',md:"55%"}}>
        <Stack direction={"row"} spacing={1.5} paddingTop={"14%"}>
          <Typography
            fontSize={{xs:'34',md:"54px"}}
            color={"white"}
            fontWeight={"bold"}
            variant="h4"
            textAlign={"center"}
          >
            I'm{" "}
          </Typography>
          <Typography
            fontSize={{xs:'34',md:"54px"}}
            color={"#ffbd39"}
            fontWeight={"bold"}
            variant="h4"
            textAlign={"center"}
          >
            Availaible
          </Typography>
          <Typography
            gutterBottom
            fontSize={{xs:'54',md:"54px"}}
            color={"white"}
            fontWeight={"bold"}
            variant={{xs:'h1',md:"h4"}}
            textAlign={"center"}
          >
            for freelancing
          </Typography>
        </Stack>
        <br />
        <Typography fontWeight={'bold'} color={'#b5b1a7'} variant="body1" textAlign={'center'}>
        I thrive on creativity and innovation. Let's connect and explore exciting opportunities
        </Typography><br/>
        <Typography marginTop={"10%"} textAlign={"center"}>
          <Button
            sx={{
              backgroundColor: "#ffbd39",
              color: "black",
              width: "20%",
              fontWeight: "bold",
              borderRadius: "35px",
              padding: "1rem",
              fontSize:'17px',
              ":hover": {
                backgroundColor: "maroon",
                color: "white",
              },
            }}
            size="large"
            variant="contained"
          >
            Hire Me
          </Button>
        </Typography>
      </Box>
    </div>
  );
};
