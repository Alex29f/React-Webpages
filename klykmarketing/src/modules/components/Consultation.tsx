import React from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const ConsultationSection = () => {
  return (
    <Grid
      container
      style={{
        padding: 3,
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Card
          variant="outlined"
          style={{ backgroundColor: "red", borderRadius: 0 }}
        >
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" />
                <TextField
                  fullWidth
                  label="Company Name"
                  variant="outlined"
                  style={{ marginTop: 16 }}
                />
                <TextField
                  fullWidth
                  label="Package"
                  variant="outlined"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  style={{ marginTop: 16 }}
                >
                  <option value="basic">Basic</option>
                  <option value="premium">Premium</option>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" align="center" gutterBottom>
                  Contact Me
                </Typography>
                <Typography align="center">Phone: +1234567890</Typography>
                <Typography align="center" style={{ marginTop: 8 }}>
                  Email: contact@example.com
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ConsultationSection;
