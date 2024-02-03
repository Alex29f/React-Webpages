// Highlights.tsx
import React from "react";
import { Box, Paper, Typography, IconButton, Grid, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import arrow icon
import twitchIcon from "../../../Assets/twitch.png"; // Make sure the path is correct
import youtubeIcon from "../../../Assets/youtubeIcon.png"; // Make sure the path is correct

const videoEmbeds = [
  {
    title: "Money",
    type: "twitch",
    src: "https://clips.twitch.tv/embed?clip=SmallEagerOwlTinyFace-wsB00CaR1UkE1odK&parent=localhost",
  },
  {
    title: "Ka dabut meitenes",
    type: "youtube",
    src: "https://www.youtube.com/embed/_PmgfAHqgdk?si=t-4c3EbyIJcltuQz",
  },
  {
    title: "Money",
    type: "twitch",
    src: "https://clips.twitch.tv/embed?clip=SmallEagerOwlTinyFace-wsB00CaR1UkE1odK&parent=localhost",
  },
];

const Highlights = () => {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center" color="gold">
        Latest Highlights
      </Typography>
      <Grid container spacing={2}>
        {videoEmbeds.map((video, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={4} sx={{ p: 1, backgroundColor: "transparent" }}>
              <Typography
                variant="h6"
                gutterBottom
                color="gold"
                textAlign="center"
              >
                {video.title}
              </Typography>
              <iframe
                src={video.src}
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="400"
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Typography
          variant="h6"
          color="gold"
          sx={{ display: "flex", alignItems: "center" }}
        >
          More Highlights
          <ArrowForwardIcon sx={{ ml: 1, width: "40px", height: "40px" }} />
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
          <Link
            href="https://www.twitch.tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <img
                src={twitchIcon}
                alt="Twitch"
                style={{ width: "50px", height: "40px" }}
              />
            </IconButton>
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                style={{ width: "50px", height: "50px" }}
              />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Highlights;
