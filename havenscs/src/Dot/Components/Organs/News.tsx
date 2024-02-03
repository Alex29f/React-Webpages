import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useApiContext } from "../../../Contexts/ApiContext";
import { useNavigate } from "react-router-dom";
interface NewsListProps {
  fetchNewsFunction: () => Promise<void>;
}
const NewsList = ({ fetchNewsFunction }: NewsListProps) => {
  const { news } = useApiContext();
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    fetchNewsFunction(); // Call the passed fetch function
  }, [fetchNewsFunction]); // Dependency on the fetch function
  return (
    <Box sx={{ maxWidth: "95%", margin: "auto", padding: "20px 30px", display:'flex',flexDirection:'column', justifyContent:'center' }}>
      <Typography textAlign={'center'} variant={'h2'} sx={{ color: 'white'}}>NEWS</Typography>
      {news.map((news, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            backgroundColor: "transparent",
            marginBottom: 2,
            borderRadius: 0,
            overflow: "hidden",
            paddingTop: 10,
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "35%", md: "25%" },
              objectFit: "cover",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)", // Creates the parallelogram shape
            }}
            image={news.imageUrl}
            alt={news.title}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "white",
              flexGrow: 0,
              padding: 2,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ wordBreak: "break-word" }}
            >
              {news.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ wordBreak: "break-word", marginBottom: 2 }}
            >
              {news.shortDescription}
            </Typography>
            {/* Button wrapped in a Box for alignment */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button
                variant="outlined"
                onClick={() => navigate(`/news/${news.id}`)} // navigate to /news/id
                sx={{
                  backgroundColor: "transparent",
                  color: "#FFD700",
                  borderWidth: "2px",
                  borderColor: "#FFD700",
                  "&:hover": {
                    borderColor: "#FFD700",
                  },
                  fontSize: "0.75rem",
                  padding: "6px 12px",
                  maxWidth: "fit-content",
                }}
              >
                Read More
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
      {/* More News Button at the bottom */}
    </Box>
  );
};

export default NewsList;
