import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";

const TwitterWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    // Define the cleanup function that removes the script when the component unmounts
    return () => {
      // Check if the script exists before trying to remove it
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10}>
        <Box
          sx={{
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: 3,
            border: "none",
            maxWidth: "1000px", // Set the maximum width
            width: "100%", // Set the width to 100%
            height: "auto", // Let the height be determined by the content
            margin: "auto", // Centers the box
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "800px", // Minimum height for the container
            paddingBottom: "50px", // Add some extra padding at the bottom
          }}
        >
          <a
            className="twitter-timeline"
            data-width="100%"
            data-height="800" // Fixed height for the Twitter timeline
            data-theme="dark"
            href="https://twitter.com/HAVENsgg?ref_src=twsrc%5Etfw"
          >
            Tweets by HAVENsgg
          </a>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwitterWidget;
