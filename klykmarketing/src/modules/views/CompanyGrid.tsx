import React from "react";
import Devo from "../../assets/Images/Devo.png";
import Burner from "../../assets/Images/Burner.png";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const companies = [
  {
    name: "",
    description:
      "Devo focuses exclusively on the B2B market and serves professionals and specialty stores.",
    imageUrl: Devo
      ,
  },
  {
    name: "",
    description: "A company full of creative energy with love for wood!",
    imageUrl:
      Burner,
  },
  { 
    name: "",
    description: "Innovative tech company known for iPhones, Macs, and more.",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
  },
  {
    name: "",
    description:
      "Global beverage leader, known for its flagship product Coca-Cola.",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
  },
  // Add more companies as needed
];

const CompanyGrid: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imageHeight = '200px'; // Adjust this value as needed

  return (
    <Grid container spacing={5} padding={5}>
      {companies.map((company, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          key={index}
          style={{
            marginTop: isSmallScreen ? 0 : index % 2 === 0 ? "0" : "100px",
          }}
        >
          <Card
            style={{
              border: "0px solid #ccc",
              boxShadow: "0 0 0 0",
              borderRadius: "30px",
            }}
          >
            <CardMedia
              component="img"
              height={imageHeight}
              image={company.imageUrl}
              alt={company.name}
              style={{
                width: "100%",
                objectFit: "contain",
                height: imageHeight,
              }}
            />
            <CardContent style={{ textAlign: isSmallScreen ? "left" : "center" }}>
              <Typography variant="h3" component="div" color={"#32235F"}>
                {company.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {company.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyGrid;
