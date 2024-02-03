import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../Assets/logov2.png";

const pages = ["News", "Matches", "Highlights", "About"];

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Havens
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem
            button
            key={page}
            component={RouterLink}
            to={`/${page.toLowerCase()}`}
          >
              <ListItemText><Typography fontFamily={"'Teko', sans-serif"} variant={"body1"}>{page}</Typography></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          color: "white",
          transition: "0.3s",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="Logo" height="40px" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center", flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "inherit", display: "block" }}
                component={RouterLink}
                to={`/${page.toLowerCase()}`}
              >
                 <Typography fontFamily={"'Teko', sans-serif"} variant={"body1"}>{page}</Typography>
              </Button>
            ))}
          </Box>
          {/* Spacer to keep the logo and nav items centered */}
          <Box sx={{ display: { xs: "none", sm: "block" }, width: 48 }}></Box>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
