import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import { Outlet } from "react-router-dom";
import { CssBaseline, useTheme } from "@mui/material";
import light_theme from "../Dot/Theme/light_theme";
import { ApiProvider, useApiContext } from "../Contexts/ApiContext";
import { useEffect } from "react";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // <ApiProvider>
    <ThemeProvider theme={light_theme}>
      <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
        <AppBar
          sx={{ color: theme.palette.background.default }}
          position="fixed"
          open={open}
        >
          <Toolbar
            color={theme.palette.background.default}
            sx={{ bgcolor: theme.palette.background.default }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={() => {
                open ? handleDrawerClose() : handleDrawerOpen();
              }}
              edge="start"
            >
              <MenuIcon color={"secondary"} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <LeftDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Main sx={{ pt: 10 }} open={open}>
          <Outlet />
        </Main>
      </Box>
      <CssBaseline />
    </ThemeProvider>
    // </ApiProvider>
  );
}
