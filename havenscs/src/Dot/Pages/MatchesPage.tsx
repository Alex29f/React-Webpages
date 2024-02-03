import React from 'react';
import { Box } from '@mui/system';
import NavBar from "../Components/Organisms/NavBar";
import Footer from "../Components/Organisms/Footer";
import Momenti from '../Components/Organs/Matches';
import Highlights from '../Components/Organs/Highlights';

const MatchesPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        backgroundImage: `
          radial-gradient(circle at right 5% top 0%, rgba(255, 223, 0, 0.4) 0%, transparent 45%),
          radial-gradient(circle at left 0% bottom 40%, rgba(255, 223, 0, 0.4) 0%, transparent 55%),
          repeating-linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) 1px, transparent 1px, transparent 100%),
          repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) 1px, transparent 1px, transparent 100%)
        `,
        backgroundSize: "cover, cover, 40px 40px, 40px 40px",
        backgroundRepeat: "no-repeat, no-repeat, repeat, repeat",
        backgroundPosition: "top right, bottom left, 0 0, 0 0",
        margin: 0,
        padding: 0,
      }}
    >
      <NavBar />
      <Highlights />
      <Momenti />
      <Footer />
    </Box>
  );
};

export default MatchesPage;