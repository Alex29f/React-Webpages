import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

import { Container } from "@mui/material";
// Import all logos
import KylkLogo from "../../Assets/Logos/klyk.png";
import LCSign from "../../Assets/Logos/lcsign.png";
import PICASSO from "../../Assets/Logos/PICASSO.png";
import ValensNutri from "../../Assets/Logos/ValensNutri.png";

export default function TestimonialsCarousel() {
  // Define the company logos and their URLs in an array of objects
  const companies = [
    { logo: PICASSO, url: "https://picassomarketing.lv/" },
    { logo: KylkLogo, url: "https://klyk.lv/" },
    { logo: ValensNutri, url: "https://valensnutri.com/" },
    { logo: LCSign, url: "https://lcsign.lv/" },
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
      <Swiper
        spaceBetween={150}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
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
