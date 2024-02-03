import React, { useState, useEffect } from "react";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { animated, useSpring } from "react-spring";
import GreenHeart from "../../assets/Images/green-hearts.svg";
import RedThingy from "../../assets/Images/top-blob.svg";
import BigHeartMockup from "../../assets/Images/big-heart-mockup.webp";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100vh",
  minHeight: "100vh",
  maxHeight: "1300px",
  overflow: "hidden",
}));

const Background = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
  backgroundPosition: "center center",
}));
const RedElementAnimated = styled(animated.div)(({ theme }) => ({
  position: "absolute",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${RedThingy})`,
  width: "500px",
  height: "500px",
  zIndex: -1, // on top by default
  [theme.breakpoints.down("sm")]: {
    width: "250px", // smaller on small screens
    height: "250px", // smaller on small screens
    zIndex: -1, // behind the content on small screens
  },
}));
interface ProductHeroLayoutProps {
  sxBackground?: SxProps<Theme>;
}
const BigHeartAnimated = styled(animated.div)(({ theme }) => ({
  position: "absolute",
  top: "5%",
  left: "5%",
  right: 0,
  bottom: 0,
  maxWidth: "714px",
  maxHeight: "830px",
  height: "90%",
  padding: "60px 0",
  margin: "auto", // This will center the element
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${BigHeartMockup})`,
  zIndex: -1, // Ensure it's behind the children
}));

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
  const { sxBackground, children } = props;

  const flyInAnimation = useSpring({
    from: { transform: "translate3d(-100px,-100px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
    delay: 500, // Delay in ms before the animation starts
    config: { duration: 500 }, // Duration in milliseconds
  });
  const flyDownAnimation = useSpring({
    from: { transform: "translate3d(100px,100px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
    delay: 500,
    config: { duration: 500 }, // Duration in milliseconds
  });
  const popOutAnimation = useSpring({
    from: { transform: "scale(0.5)" },
    to: { transform: "scale(1)" },
    delay: 500,
    config: { duration: 500 },
  });

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <BigHeartAnimated style={{ ...popOutAnimation }} />
        {children}
        <Background
          sx={{
            ...sxBackground,
            backgroundImage: `url(${GreenHeart})`,
          }}
        />
        <RedElementAnimated style={{ ...flyInAnimation, top: 0, left: 0 }} />
        <RedElementAnimated
          className="flipped"
          style={{
            ...flyDownAnimation,
            bottom: 0,
            right: 0,
            rotate: "180deg",
          }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
