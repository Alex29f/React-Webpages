import React, { useEffect } from "react";
import NavBar from "../Components/Organisms/NavBar";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DiscordWidget from "../Components/Organs/DiscordWidget";
import { Box } from "@mui/system";

import News from "../Components/Organs/News";
import Footer from "../Components/Organisms/Footer";
import Banner from "../Components/Organs/Banner";
import TwitterWidget from "../Components/Organs/TwitterWidget";
import Sponsors from "../Components/Organs/Sponsors";
import { useApiContext } from "../../Contexts/ApiContext";

const HomePage = () => {
  const { getLatestNews } = useApiContext();

  const theme = useTheme();
  useEffect(() => {
    // call the api here for what is needed to be loaded on first render
  }, []);
  return (
    <Box
        px={20}
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        backgroundImage: `
          radial-gradient(circle at right 5% top 0%, rgba(255, 223, 0, 0.4) 0%, transparent 35%),
          radial-gradient(circle at left 0% bottom 45%, rgba(255, 223, 0, 0.4) 0%, transparent 35%),
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
      <Banner />
      <News fetchNewsFunction={getLatestNews} />
      <Sponsors />
      <TwitterWidget />
      <Footer />
    </Box>
  );
};

export default HomePage;
