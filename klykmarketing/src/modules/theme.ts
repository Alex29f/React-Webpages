import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      main: "#1D1E23", // Dark color (mostly background)
    },
    secondary: {
      main: "#4CA1A3", // Teal-ish color from the image
    },
    text: {
      primary: "#EFEFEF", // Almost white color for primary text
    },
    background: {
      default: "#1D1E23", // Dark color (mostly background)
    },
  },
  typography: {
    fontFamily: '"Tektur", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: '"Bebas Neue", sans-serif',
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
      color: "#49F54C", // Green color from the image
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
      color: "#1D1E23", // Dark color from the image
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
      color: "#FAA916", // Gold color from the image
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
      color: "#D83367", // Red/pink color from the image
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
      color: "#EFEFEF",
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
      color: "#EFEFEF",
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
      color: "#3CD3AD",
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
      color: "#1D1E23",
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
      color: "#1D1E23",
    },
  },
};

export default theme;
