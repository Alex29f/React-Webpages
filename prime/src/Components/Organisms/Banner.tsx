import React from "react";
import BannerLayout from "./BannerLayout"; // Ensure the path is correct
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { animated, useSpring } from "react-spring";

export default function Banner() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const flyInAnimation = useSpring({
    from: { transform: "translate3d(0,50px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
    delay: 500, // Delay in ms before the animation starts
    config: { duration: 500 }, // Duration in milliseconds
  });
  const AnimatedBox = animated(Box);

  return (
    <BannerLayout>
      <AnimatedBox style={flyInAnimation}>
        <Box
          sx={{
            // backgroundColor: "white", // White background
            p: isSmallScreen ? 5 : 10, // Adjust padding based on screen size
            //   boxShadow: `
            //   0px 4px 6px -1px rgba(0, 0, 0, 0.1),
            //   0px 2px 4px -1px rgba(0, 0, 0, 0.06),
            //   0px 10px 15px -3px rgba(0, 0, 0, 0.2)
            // `,
            width: { xs: "80%", md: "60%" }, // 80% width on phones, 50% on medium screens and up
            mx: "auto", // Center the box horizontally
            textAlign: isSmallScreen ? "center" : "left", // Text alignment based on screen size
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: isSmallScreen ? "3rem" : "5rem",
              color: "#bc13fe",
              fontWeight: "700",
            }}
          >
            IT risinājumi tavam biznesam
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "1.25rem",
              color: "#ffffff",
              fontWeight: "100",
            }}
          >
            Programmatūras izstrāde privātajam un publiskajam sektoram pēc
            individuāla pasūtījuma.
          </Typography>
          {/* <Button
          variant="contained"
          color="primary"
          href="#contact"
          sx={{
            marginTop: "1rem",
            backgroundColor: "purple",
            "&:hover": {
              backgroundColor: "darkpurple",
              color: "white",
            },
            "&.MuiButton-containedPrimary": {
              color: "white",
            },
          }}
        >
          Sākt
        </Button> */}
        </Box>
      </AnimatedBox>
    </BannerLayout>
  );
}
