// NewsDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../../Contexts/ApiContext";
import NavBar from "../Components/Organisms/NavBar";
import { Grid, Container, Box, Typography } from "@mui/material"; // Import necessary components

interface News {
  id?: number;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
}

const NewsDetails = () => {
  const [newsItem, setNewsItem] = useState<News | null>(null);
  const { id } = useParams<{ id: string }>();
  const { getNewsById } = useApiContext();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const numericId = parseInt(id);
        const data = await getNewsById(numericId);
        setNewsItem(data);
      }
    };

    fetchData();
  }, [id, getNewsById]);

  if (!newsItem) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        minheight: "100%", // Full height of the viewport
        // height:"100%",
        width: "100%", // Full width
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        backgroundImage: `repeating-linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) 1px, transparent 1px, transparent 100%),
                  repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) 1px, transparent 1px, transparent 100%)`,
        backgroundSize: "40px 40px",
        backgroundRepeat: "repeat",
        margin: 0,
        padding: 0,
      }}
    >
      <Container>
        <NavBar />
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            {" "}
            {/* Adjusted to be 10 columns wide at 'md' breakpoint */}
            <Typography variant="h1" color="#ffffff">
              {newsItem.title}
            </Typography>
            <img
              src={newsItem.imageUrl}
              alt={newsItem.title}
              style={{ maxWidth: "100%" }}
            />
            <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetails;
