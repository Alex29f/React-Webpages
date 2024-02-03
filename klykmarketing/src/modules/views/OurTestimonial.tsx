import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../Theme/css/OurTestimonial.css";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

import { Container } from "@mui/material";
// Import all logos
import EzitisLogo from "../../assets/Images/Ezitis.png";
import MyfitnessLogo from "../../assets/Images/myfitness-logo-bez-fona_.png";
import AokLogo from "../../assets/Images/aok-cantus-logo-1024x491.png";
import BvkLogo from "../../assets/Images/Biznesa_vadibas_koledzas_logo.png";
import DomeHotelLogo from "../../assets/Images/15823651595e50f9e741b27.png";
import PrimeITLogo from "../../assets/Images/PrimeIT_logo_black_600x314_trans.png";

export default function TestimonialsCarousel() {
  // Define the company logos and their URLs in an array of objects
  const companies = [
    { logo: EzitisLogo, url: "https://www.ezitis.lv/" },
    { logo: MyfitnessLogo, url: "https://www.myfitness.lv/" },
    { logo: AokLogo, url: "https://aok.lv/aok-kvartals/" },
    { logo: BvkLogo, url: "https://www.bvk.lv/" },
    { logo: DomeHotelLogo, url: "https://www.domehotel.lv/" },
    { logo: PrimeITLogo, url: "https://primeit.lv/" },
  ];

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
                style={{ maxWidth: "300px", height: "auto" }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
