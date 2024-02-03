import React from "react";
import { InlineWidget } from "react-calendly";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <React.Fragment>
      {"Mājaslapa izstrādāta sadarbībā ar "}
      <Link color="inherit" href="https://primeit.lv/">
        Prime IT
      </Link>
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <div>
      <Typography
        component="footer"
        sx={{
          display: "flex",
          bgcolor: "#101110",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            my: 1,
          }}
        >
          <Grid container spacing={1}>
            {/* Calendly widget integration */}
            <Grid item xl={12}>
              <InlineWidget
                url="https://calendly.com/" //channge this to right calendly integration link
                styles={{
                  width: "100%",
                  height: "700px",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "ff009a",
                  textColor: "4d5055",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Box bgcolor="black" py={1} textAlign="center" color="white">
        <Copyright />
      </Box>
    </div>
  );
}
