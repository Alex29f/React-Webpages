import React from "react";
import { Box } from "@mui/material";

const DiscordWidget: React.FC = () => {
  return (
    <Box
      sx={{
        overflow: "hidden", // Prevents the iframe content from overflowing
        borderRadius: "16px", // Rounded corners for the iframe
        boxShadow: 3, // MUI's shadow styling
        width: 350, // Width of the iframe
        height: 250, // Height of the iframe
        border: "none", // Removes the border
        // Responsive styling
        "@media (max-width: 600px)": {
          width: "100%", // Full-width on small devices
        },
      }}
    >
      <iframe
        src="https://discord.com/widget?id=796911955419856896&theme=dark"
        width="100%"
        height="100%"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{ borderRadius: "16px" }} // Additional styling to ensure rounded corners inside the Box
      ></iframe>
    </Box>
  );
};

export default DiscordWidget;
