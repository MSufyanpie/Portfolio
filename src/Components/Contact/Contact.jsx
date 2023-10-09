import React from "react";
import NavBar from "../Common/Navbar/navbar";
import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Image } from "react-bootstrap";
import { GitHub, Google, Instagram, LinkedIn, Send } from "@mui/icons-material";
import { RxReset } from "react-icons/rx";
import { GrPowerReset } from "react-icons/gr";
import { ContactIcons } from "./ContactIcons";
export default function Contact() {
  return (
    <div>
      <Stack>
        <Typography
          variant="h3"
          textAlign={"center"}
          color={"whitesmoke"}
          fontWeight={"bold"}
        >
          Let's Make Something Great Together!
        </Typography>
        <hr
          style={{
            width: "20%",
            color: "green",
            border: "2px solid green",
            alignSelf: "center",
          }}
        />
      </Stack>
      <br />
      
      <ContactIcons />
      <br />
      <Box
        sx={{ border: "1px solid white" }}
        m={"auto"}
        boxShadow={10}
        width={{ xs: "95%", md: "60%" }}
        marginTop={"3%"}
      >
        <Stack direction={"row"}>
          <Box width={"40%"} sx={{ backgroundColor: "#242320" }}>
            <Image
              style={{ height: "480px", width: "400px", marginTop: "6%" }}
              src="src\assets\sufyan.png"
            ></Image>
          </Box>
          <Box width={"60%"} sx={{ backgroundColor: "white" }}>
            <Form action="https://formspree.io/f/xpzgrlor" method="POST">
              <Stack px={2} direction={"column"} spacing={4} marginTop={"2%"}>
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  fontWeight={"bold"}
                  color={"#ffbd39"}
                >
                  GET IN TOUCH
                </Typography>

                <Stack direction={"row"} spacing={1} paddingLeft={"39%"}>
                  <Instagram sx={{ color: "#d62976" }} />
                  <Google sx={{ color: "gold" }} />
                  <GitHub />
                  <LinkedIn sx={{ color: "blue" }} />
                </Stack>
                <TextField
                  sx={{ border: "2px solid white", borderRadius: "10px" }}
                  name="name"
                  size="small"
                  label="Name"
                  required
                />
                <TextField
                  sx={{
                    border: "2px solid white",
                    borderRadius: "10px",
                    color: "white",
                  }}
                  name="Email"
                  type="email"
                  size="small"
                  label="Email"
                  required
                />
                <TextField
                  sx={{ border: "2px solid white", borderRadius: "10px" }}
                  name="subject"
                  size="small"
                  label="Subject"
                  required
                />
                <TextField
                  sx={{ border: "2px solid white", borderRadius: "10px" }}
                  name="message"
                  multiline
                  maxRows={4}
                  label="Message"
                  required
                />
              </Stack>
              <br />
              <Typography textAlign={"center"}>
                <Button
                  type="submit"
                  sx={{
                    marginTop: "2%",
                    marginLeft: "2%",
                    backgroundColor: "goldenrod",
                    fontWeight: "bold",
                    padding:'1rem',
                    width:'20%',
                    borderRadius: "35px"
                  }}
                  variant="contained"
                  color="success"
                  size="large"
                >
                  Send
                  <Send />
                </Button>
                <Button
                  sx={{
                    marginTop: "2%",
                    marginLeft: "2%",
                    color: "white",
                    fontWeight: "bold",
                    padding:'1rem',
                    width:'20%',
                    borderRadius: "35px"
                  }}
                  variant="contained"
                  color="error"
                  size="large"
                >
                  Reset
                </Button>
              </Typography>
            </Form>
            <br />
          </Box>
        </Stack>
      </Box>

      <br />
    </div>
  );
}
