import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import teamPhoto from "../../../Assets/announcement_v7.png";

const Banner = () => {
    const theme = useTheme();
  return (
    <Box sx={{
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant="h1" sx={{ fontWeight: 'bold', color: "#FFD700" }}>
        WE. ARE. HAVENS.
      </Typography>
      <Typography variant="h6" sx={{ my: 2, color: "white", textAlign: 'center' }}>
        From Latvia to the world. Ready to compete, conquer, and rise to glory.
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10} sx={{
          overflow: 'hidden', // Ensures the part of the image outside the clip-path is hidden
          clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', // Creates the parallelogram shape
          my: 2, // Margin top and bottom for spacing
        }}>
          <img 
            src={teamPhoto} 
            alt="HAVENs" 
            style={{ 
              width: '100%', // Image width
              height: 'auto', // Adjusts height to maintain aspect ratio
              display: 'block' // Ensures the image does not have extra space below (inline-block default behavior)
            }} 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
