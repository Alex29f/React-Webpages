import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Alert,
  Grid,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from "../../Assets/Logos/BlackThemeLogo.png";
import { Image } from "@mui/icons-material";
interface ContactFormState {
  name: string;
  email: string;
  companyName: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // Add this state for submit status
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formState.email)) {
      console.error("Invalid email address");
      setSubmitStatus("Invalid email address");
      return;
    }

    // Set a status indicating that the message is being sent
    setSubmitStatus("Message sent successfully");
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);
    setFormState({
      name: "",
      email: "",
      companyName: "",
      message: "",
    });
    const { name, email, companyName, message } = formState;

    const endpoint = `https://primeit-backend.azurewebsites.net/api/SendEmail?destinationEmail=${encodeURIComponent(
      email
    )}&subject=${encodeURIComponent(
      `Contact Request from ${name} at ${companyName}`
    )}&messageBody=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Email sent successfully.");
      } else {
        console.error("Failed to send email.");
        setSubmitStatus("Failed to send email");
      }
    } catch (error) {
      console.error("There was an error sending the email", error);
      setSubmitStatus("An error occurred while sending the email");
    }
  };
  return (
    <Grid
      id="kontakti"
      container
      justifyContent={"center"}
      sx={{
        padding: isSmallScreen ? 2 : 4,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          color={theme.palette.primary.main}
          sx={{ textAlign: "center", mb: 4 }}
        >
          Vai esi gatavs IT konsultācijai?
        </Typography>
      </Grid>
      <Grid
        component={Card}
        elevation={4}
        container
        direction={"row"}
        item
        sm={8}
        justifyContent={"space-between"}
      >
        <Grid item xs={12} md={8} py={"2rem"} px={"4rem"}>
          <Grid item xs={12}>
            <Typography variant="h6">Raksti mums:</Typography>
          </Grid>
          {showSuccessAlert && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Ziņa ir veiksmīgi nosūtīta!
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Grid mt={"0.5rem"} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Vārds"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="E-pasts"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Kompānijas nosaukums"
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Ziņa"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button type="submit" variant="contained">
                  Sūtīt
                </Button>
              </Grid>
            </Grid>
          </form>
          {/*  </CardContent>*/}
          {/*</Card>*/}
        </Grid>
        <Grid
          p={"2rem"}
          container
          direction={"row"}
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.secondary.main,
          }}
          justifyContent={"center"}
          rowSpacing={"4"}
          item
          xs={12}
          md={4}
        >
          {/*<Box sx={{  mt: 4 }}>*/}
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h6">Kontaktu Informācija:</Typography>
            </Grid>
            <Grid mt={"2rem"} px={"2rem"} container item xs={12}>
              <Grid container item xs={12}>
                <Grid item xs={2}>
                  <LocationOnIcon fontSize="medium" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant={"body2"} fontWeight={600}>
                    Rīga, Latvija
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={2}>
                  <PhoneIcon fontSize="medium" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant={"body2"} fontWeight={600}>
                    +371 29 177 442
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={2}>
                  <EmailIcon fontSize="medium" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant={"body2"} fontWeight={600}>
                    contact@primeit.lv
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/*<Hidden mdDown>*/}
          {/*    <Grid container alignItems={'center'} item xs={12} >*/}
          {/*        <Grid item xs={4} >*/}
          {/*            <img src={Logo}  />*/}
          {/*        </Grid>*/}
          {/*        <Grid item xs={8} >*/}
          {/*            <Typography variant={'body1'} fontWeight={500}>*/}
          {/*                - Mēs rūpējamies par jūsu biznesu*/}
          {/*            </Typography>*/}
          {/*        </Grid>*/}

          {/*    </Grid>*/}
          {/*</Hidden>*/}
          <Grid item xs={12}>
            <Typography variant={"h6"}>Vai sociālajos tīklos:</Typography>
            <Box
              mt={"2rem"}
              px={"2rem"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"flex-start"}
            >
              <Link
                href="https://www.linkedin.com/company/prime-it-lv/"
                color="inherit"
              >
                <LinkedInIcon fontSize="large" />
              </Link>

              <Link
                href="https://www.instagram.com/primeitlv/"
                color="inherit"
                sx={{ ml: 2 }}
              >
                <InstagramIcon fontSize="large" />
              </Link>
              <Link
                href="https://www.instagram.com/primeitlv/"
                color="inherit"
                sx={{ ml: 2 }}
              >
                <FacebookIcon fontSize="large" />
              </Link>
            </Box>
          </Grid>
          {/*</Box>*/}
        </Grid>
        {/*<Hidden mdDown>*/}
        {/*    <Grid item sm={1}>*/}
        {/*        <Divider orientation={'vertical'} sx={{ height: '100%' }}/>*/}
        {/*    </Grid>*/}
        {/*</Hidden>*/}
      </Grid>
    </Grid>
  );
};

export default ContactUs;
