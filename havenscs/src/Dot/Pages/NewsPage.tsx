// LatestNewsPage.tsx
import React from "react";
import NewsList from "../Components/Organs/News";
import { useApiContext } from "../../Contexts/ApiContext";
import NavBar from "../Components/Organisms/NavBar";
import Banner from "../Components/Organs/Banner";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NewsPage = () => {
  const { getAllNews } = useApiContext();
  const theme = useTheme();

  return (
    <Box
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
      <Typography variant="h1">Latest News</Typography>
      <NewsList fetchNewsFunction={getAllNews} />
    </Box>
  );
};

export default NewsPage;
