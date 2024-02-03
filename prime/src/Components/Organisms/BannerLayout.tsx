import React, { useRef, useEffect } from "react";
import { Theme, styled } from "@mui/material/styles";

import { Box, Container, useMediaQuery } from "@mui/material";

// Define your styled components
const BannerLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100vh",
  minHeight: "100vh",
  maxHeight: "1300px",
  overflow: "hidden",
}));

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.5)", // Semi-transparent gray
  zIndex: 1, // Ensure it's above the background but below the content
});
interface BannerLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any additional props you need here
}

// Define your component
export default function BannerLayout(props: BannerLayoutProps) {
  const { children } = props;
  const vantaRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    // Initialize Vanta.js
    const vantaEffect = window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x1f0078,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <BannerLayoutRoot ref={vantaRef} id="sākums">
      <Overlay /> {/* Adding the overlay */}
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: isSmallScreen ? "center" : "flex-start", // Center on small screens, left align otherwise
          marginLeft: isSmallScreen ? "0%" : "10%", // No margin on small screens
          position: "relative", // Ensure the content is above the overlay
          zIndex: 2,
        }}
      >
        {children as React.ReactNode}
      </Container>
    </BannerLayoutRoot>
  );
}
