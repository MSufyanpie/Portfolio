import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Links = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Box>
        <Typography
          marginLeft={"7%"}
          gutterBottom
          variant="h5"
          fontWeight={"bold"}
          color={"white"}
        >
          LINKS
        </Typography>
        <br />
        <Stack direction={"column"}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => scrollToSection("#section1")}
            to={"/#section1"}
          >
            <Button sx={{ color: "#b0ada4" }}>
              <ArrowRight />
              HOME{" "}
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => scrollToSection("#section2")}
            to={"/#section2"}
          >
            <Button sx={{ color: "#b0ada4" }}>
              <ArrowRight />
              ABOUT{" "}
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => scrollToSection("#section3")}
            to={"/#section3"}
          >
            <Button sx={{ color: "#b0ada4" }}>
              <ArrowRight />
              SERVICES{" "}
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => scrollToSection("#section4")}
            to={"/#section4"}
          >
            <Button sx={{ color: "#b0ada4" }}>
              <ArrowRight />
              SKILLS{" "}
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => scrollToSection("#section5")}
            to={"/#section5"}
          >
            <Button sx={{ color: "#b0ada4" }}>
              <ArrowRight />
              PROJECTS{" "}
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => scrollToSection("#section6")}
            to={"/#section6"}
          >
            <Button sx={{ color: "#b0ada4" }}>
              <ArrowRight />
              CONTACT{" "}
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};
