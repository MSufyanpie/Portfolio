import React from "react";
import "./hire.css";
import { Box, Button, Stack, Typography } from "@mui/material";
export const HireMe = () => {
  return (
    <div className="bg-img">
      <Box m={"auto"} width={"55%"}>
        <Stack direction={"row"} spacing={1.5} paddingTop={"14%"}>
          <Typography
            fontSize={"70px"}
            color={"white"}
            fontWeight={"bold"}
            variant="h2"
            textAlign={"center"}
          >
            I'm{" "}
          </Typography>
          <Typography
            fontSize={"70px"}
            color={"#ffbd39"}
            fontWeight={"bold"}
            variant="h2"
            textAlign={"center"}
          >
            Availaible
          </Typography>
          <Typography
            gutterBottom
            fontSize={"70px"}
            color={"white"}
            fontWeight={"bold"}
            variant="h2"
            textAlign={"center"}
          >
            for freelancing
          </Typography>
        </Stack>
        <br />
        <Typography fontWeight={'bold'} color={'#b5b1a7'} variant="h6" textAlign={'center'}>
        I thrive on creativity and innovation. Let's connect and explore exciting opportunities
        </Typography>
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