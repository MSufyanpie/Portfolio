import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { About } from "./About";
import { Links } from "./Links";
import { Services } from "./Services";
import { HaveQuestions } from "./HaveQuestions";

export default function Footer() {
  return (
    <Box px={16} marginTop={"5%"}>
      <Stack direction={{xs:'column',md:"row"}} spacing={20}>
        <About />
        <Links />
        <Services />
        <HaveQuestions />
      </Stack>
      <br />
      <Typography
        marginTop={"3%"}
        color={"#69706b"}
        variant="body1"
        textAlign={"center"}
      >
        Copyright © 2023 | Muhammad Sufyan | All rights reserved | This
        portfolio is made with ❤️ by Muhammad Sufyan
      </Typography>
    </Box>
  );
}
