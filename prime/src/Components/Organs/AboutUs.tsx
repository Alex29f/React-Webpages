import React from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

import {
  useMediaQuery,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import About1 from "../../Assets/AboutUs/About1.jpg";
import About2 from "../../Assets/AboutUs/About2.png";
import About3 from "../../Assets/AboutUs/About3.jpg";

// Define the props for FeatureCard
interface FeatureCardProps {
  imgSrc: string;
  alt: string;
  title: string;
  text: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imgSrc,
  alt,
  title,
  text,
  index,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const flyInAnimation = useSpring({
    from: { transform: "translate3d(0,50px,0)", opacity: 0 },
    to: {
      transform: inView ? "translate3d(0,0px,0)" : "translate3d(0,50px,0)",
      opacity: inView ? 1 : 0,
    },
    config: { duration: 500 },
  });

  const AnimatedBox = animated(Box);
  return (
    <AnimatedBox style={flyInAnimation} ref={ref} id="par mums">
      <Card
        sx={{
          display: "flex",
          flexDirection: isSmallScreen
            ? "column"
            : index % 2 === 0
            ? "row-reverse"
            : "row",
          m: isSmallScreen ? 1 : 5,
          boxShadow: "none",
          width: isSmallScreen ? "100%" : "auto",
        }}
      >
        <CardMedia
          component="img"
          height={isSmallScreen ? "200" : "300"}
          image={imgSrc}
          alt={alt}
          sx={{ objectFit: "contain", width: isSmallScreen ? "100%" : "50%" }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </AnimatedBox>
  );
};

const iconTextData = [
  {
    imgSrc: About1,
    alt: "Mūsu darbinieki piedāvā kvalitatīvu IT atbalstu",
    title: "Pielāgoti risinājumi",
    text: "Jūsu redzējums ir mūsu sākumpunkts. Mēs cieši sadarbojamies ar Jums, lai saprastu Jūsu uzņēmuma vajadzības un mērķus.",
  },
  {
    imgSrc: About2,
    alt: "Mēs esam jūsu uzticamais IT partneris",
    title: "Nepārtraukta uzturēšana un atbalsts",
    text: "Tas ietver regulāras atjaunināšanas, drošības uzlabojumus un problēmu risināšanu, lai nodrošinātu Jūsu tehnoloģiju nepārtrauktu darbību un ilgtspējīgu veiksmi.",
  },
  {
    imgSrc: About3,
    alt: "Tehnoloģijas, kas veicina jūsu uzņēmuma izaugsmi",
    title: "Inovācija un Konkurētspēja",
    text: "Mēs izmantojam jaunākās tīmekļa tehnoloģijas, lai jūsu digitālā klātbūtne būtu aktuāla un konkurētspējīga.",
  },
];

const AboutUs: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ padding: isSmallScreen ? 2 : 4 }}>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
        Kāpēc Prime IT?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {iconTextData.map((item, index) => (
          <Grid item xs={12} md={10} key={index}>
            <FeatureCard {...item} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
