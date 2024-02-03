import React from "react";
import { Box, Typography, Link, Container, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: "black", color: "white", pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" textAlign="center" gutterBottom>
          Prime IT Latvija
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          Mēs nodrošinām IT risinājumus, kas palīdz Jūsu biznesam attīstīties.
        </Typography>
        <Typography variant="h6" textAlign="center" gutterBottom sx={{ mt: 4 }}>
          Seko mums
        </Typography>
        <Link
          href="https://www.linkedin.com/company/prime-it-lv/"
          color="inherit"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.instagram.com/primeitlv/"
          color="inherit"
          sx={{ ml: 2 }}
        >
          <InstagramIcon fontSize="large" />
        </Link>
      </Container>
      {/* This Box is full-width and sticks to the bottom of the viewport */}
      <Box
        sx={{
          backgroundColor: "#black",
          width: 1,
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ fontWeight: 100, fontSize: 10 }}
          >
            Copyright © 2024. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
