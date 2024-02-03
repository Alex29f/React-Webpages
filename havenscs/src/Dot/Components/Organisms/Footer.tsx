import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import InstagramIcon from "@mui/icons-material/Instagram";
import ForumIcon from "@mui/icons-material/Forum";
import DiscordWidget from "../Organs/DiscordWidget";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "transparent", color: "white", padding: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item container xs={12} md={8} lg={6} spacing={2}>
          {/* 'About Us' and 'DiscordWidget' will be within this nested Grid container */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Learn more about our story, mission, and values. Connect with us
              on social media.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <DiscordWidget />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
        {/* Social media icons */}
        <Grid item>
          <Link href="https://twitter.com" color="inherit">
            <TwitterIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://twitch.tv" color="inherit">
            <SportsEsportsIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://instagram.com" color="inherit">
            <InstagramIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://discord.com" color="inherit">
            <ForumIcon />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
