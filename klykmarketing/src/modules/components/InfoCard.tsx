import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface InfoCardProps {
  title: string;
  subtitle?: string;
  imgSrc: string;
  altText: string;
}

const cardStyle: SxProps<Theme> = {
  backgroundColor: "#ffffff",
  borderRadius: "0px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "20px 25px 0px #49F54C", // Hard-edged shadow with specific offset
  padding: 3,
  transition: "transform 0.3s, background-color 0.3s",
  "&:hover": {
    boxShadow: "20px 25px 0px #F40058", // Hard-edged shadow with specific offset
    transform: "scale(1.05)", // Expands the card slightly on hover
  },
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  imgSrc,
  altText,
}) => {
  return (
    <Paper elevation={4} sx={cardStyle}>
      <Box
        component="img"
        src={imgSrc}
        alt={altText}
        sx={{
          width: "100%", // Make the image responsive to the container width
          objectFit: "contain", // This will ensure the image fits within the frame without being cropped
          maxHeight: "300px", // Prevent the image from being stretched
          display: "block",
          maxWidth: "100%", // Ensure the image is not larger than its container
          borderRadius: "20px", // Apply border radius if needed
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // changed to flex-start to align the text to the left
              padding: { xs: 1, sm: 2 }, // `1` for xs screens and `2` for sm screens and above
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "#fffff", textAlign: "left" }}
            >
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end", // changed to flex-end to align the icon to the right
              padding: 2,
            }}
          ></Box>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{ padding: 2, color: "#A9A9A9", borderTop: 1 }}
      >
        {subtitle}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
