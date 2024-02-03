import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import InfoCard from "../components/InfoCard";

const bigCard: SxProps<Theme> = (theme: Theme) => ({
  backgroundImage:
    "url('https://3sidedcube.com/app/themes/tsc-2018/img/backgrounds/earth-black.webp')",
  height: "100%",
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  padding: 3,
  mt: 0,
  [theme.breakpoints.down("sm")]: {
    // this applies to screens smaller than 'sm' (small)
    padding: 1,
  },
});
const cardData = [
  {
    title: "Retention",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1154078295843938344/1174263911093116948/Screenshot_2023-11-15_at_10.25.22.png?ex=6566f57d&is=6554807d&hm=bfd869795c29f3aa83c79dad3ecb23434710455cb136a27eb569ed6c46e77365&",
    altText: "Retention",
    subtitle: "Satisfy customers, build loyalty, ensure long-term business relationships.",
  },
  {
    title: "Content",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1154078295843938344/1174261300608639076/Screenshot_2023-11-15_at_10.15.00.png?ex=6566f30e&is=65547e0e&hm=97c3f1caba7e7d649a1924d78fc412e545aea0d0595c2d95223c599cddde7e22&",
    altText: "Content ",
    subtitle: "Consistent, memorable messaging, shapes perceptions, builds brand identity.",
  },
  {
    title: "Conversion",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1154078295843938344/1174258065374191676/Screenshot_2023-11-15_at_10.02.09.png?ex=6566f00b&is=65547b0b&hm=508f7dd7e957d886e000ceab2171be9e6a24994759de8e371d10efaa3497cec8&",
    altText: "Conversion",
    subtitle: "Lead to customer transition via effective marketing and compelling interaction.",
  },
];
function ProductValues() {
  return (
    <Box component="section" sx={bigCard} my={"2rem"}>
      <Container
        maxWidth={false}
        sx={{
          mt: 1,
          mb: 3,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on xs, horizontal row on sm and above
            justifyContent: { sm: "space-between", xs: "flex-start" }, // For xs, align items to the start
            alignItems: { sm: "center", xs: "flex-start" }, // Align items to the start on xs for a top-aligned look
            borderBottom: 1,
            borderColor: "#2E2D2D",
            pb: 2,
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ color: "#49F54C" }}>
            Our Expertise
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#A9A9A9" }}>
            Transform ideas into reality by combining creativity, strategy, and
            expertise.
          </Typography>
        </Box> */}

        <Grid container justifyContent="center" spacing={5}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <InfoCard
                title={card.title}
                imgSrc={card.imgSrc}
                altText={card.altText}
                subtitle={card.subtitle}
              />
            </Grid>
          ))}
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item m={5} xs={12}>
            <Typography
              variant="h1"
              color="success.main"
              sx={{
                textAlign: "left",
                color: "#49F54C",
              }}
            >
              WE CREATE IMPACTFUL EXPERIENCES FOR OUR CLIENTS' CUSTOMERS EVERY
              TIME THEY ENGAGE WITH A BRAND
            </Typography>
          </Grid>

          <Grid item xs={12} m={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // align items to the right side
                gap: 2, // space between the children
              }}
            >
              <Typography variant="h4" color="success.main">
                700+ Project Completed
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: { xs: "left", sm: "right" },
                  color: "#49F54C",
                }}
              >
                We take pride in our client success stories, where our creative
                strategies and execution have played a vital role in achieving
                their business goals and surpassing expectations.
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
}

export default ProductValues;
