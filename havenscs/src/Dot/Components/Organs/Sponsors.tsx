import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

import { Container, Typography } from "@mui/material";
// Import all logos
import PrimeLogo from "../../../Assets/PrimeIT_logo_white_600x314_trans.png";
import HavensLogo from "../../../Assets/HavensLogo.jpg";

export default function TestimonialsCarousel() {
  // Define the company logos and their URLs in an array of objects
  const companies = [
    { logo: HavensLogo, url: "https://primeit.lv/" },
    { logo: PrimeLogo, url: "https://primeit.lv/" },
    { logo: HavensLogo, url: "https://primeit.lv/" },
    { logo: PrimeLogo, url: "https://primeit.lv/" },
  ];
  const logoStyle: React.CSSProperties = {
    // Explicitly typing the style object
    maxWidth: "250px",
    minWidth: "100px",
    maxHeight: "100px",
    height: "auto",
    display: "block",
    margin: "0 auto",
    objectFit: "contain", // This is a valid value for objectFit
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "7rem",
        marginBottom: "0rem",
        overflow: "hidden",
        width: "100%",
        maxWidth: { lg: "80%" },
        mx: "auto",
        mb: 8,
      }}
    >
       {/* Sponsors Text Field */}
       <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', color: 'white' }}>
        Sponsors
      </Typography>
      <Swiper
        spaceBetween={150}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
          reverseDirection: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index}>
            <a href={company.url} target="_blank" rel="noopener noreferrer">
              <img
                src={company.logo}
                alt="Client logo"
                style={logoStyle} // Apply the inline styles
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
