import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Box from "@mui/material/Box"; // Import Box component

const videoSrc =
  "https://uploads-ssl.webflow.com/629769e7c7f0d5b7e04017a0/629772b6de7b4d2898e8fff3_Under%20Construction-transcode.mp4";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Wrap your text in a Box with a white background */}
      <Box
        sx={{
          backgroundColor: "white", // White background
          p: 3, // Padding inside the box
          boxShadow: "20px 25px 0px #000000", // Hard-edged shadow with specific offset
          width: { xs: "80%", md: "50%" }, // 80% width on phones, 50% on medium screens and up
          mx: "auto", // Center the box horizontally
        }}
      >
        <Typography color="#000000" align="center" variant="h1" marked="center">
          Elevate Your Brand with Our Creative Magic
        </Typography>
      </Box>
    </ProductHeroLayout>
  );
}
