import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../Assets/Logos/BlackThemeLogo.png";
import React, { useEffect, useState } from "react";

import { useNavigate, Link as RouterLink } from "react-router-dom"; // Import useNavigate and RouterLink
import Link from "@mui/material/Link"; // Import MUI Link for internal navigation

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const pages = ["Sākums", "Par mums", "Kontakti", "Blogs"];
  const navigate = useNavigate();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const checkIsHomePage = () => {
    const currentPath = window.location.pathname;
    // Check if the path is "/" for the homepage
    return currentPath === "/";
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsHomePage(checkIsHomePage());
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("load", handleRouteChange);

    // Initial check
    setIsHomePage(checkIsHomePage());

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("load", handleRouteChange);
    };
  }, []);

  const [isHomePage, setIsHomePage] = useState(checkIsHomePage());

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (page: string) => {
    handleCloseNavMenu();
    if (page === "Blogs") {
      navigate("/blogs");
    } else {
      const sectionId = page.toLowerCase();
      if (isHomePage && document.getElementById(sectionId)) {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(`/?section=${sectionId}`);
      }
    }
  };
  return (
    <React.Fragment>
      <AppBar
        position={trigger || !isHomePage ? "sticky" : "absolute"}
        sx={{
          backgroundColor: trigger || !isHomePage ? "white" : "transparent",
          color: trigger || !isHomePage ? "black" : "white",
          transition: "0.3s",
          visibility: trigger || !isHomePage ? "visible" : "hidden",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
            }}
          >
            {/* Replace with your logo */}
            <img src={logo} alt="Logo" height="40px" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "inherit", display: "block" }}
                component={page === "Blogs" ? RouterLink : Link} // Use RouterLink for "/blogs"
                to={page === "Blogs" ? "/blogs" : `#${page.toLowerCase()}`} // Use internal link for other pages
                onClick={() => handleNavigate(page)}
              >
                <Typography variant="body2" sx={{ fontWeight: 400 }}>
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
