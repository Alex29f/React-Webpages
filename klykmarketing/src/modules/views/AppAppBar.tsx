import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Navbar, Button, Nav } from "react-bootstrap";

import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import Logo from "../../assets/Images/klyk_logo_1.png";
import "../../Theme/css/AppBar.css";

function AppAppBar() {
  const [showAppBar, setShowAppBar] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 0) {
      setShowAppBar(true);
    } else {
      setShowAppBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          transform: showAppBar ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            <img
              src={Logo}
              alt="Mūsu IT eksperti strādā pie jaunākās tīmekļa vietnes izstrādes"
              className="img-fluid mx-auto BrandLogo"
            />
          </Link>
        </Toolbar>
      </AppBar>
      {showAppBar && <Toolbar />}
    </div>
  );
}

export default AppAppBar;
