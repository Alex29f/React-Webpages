import Banner from "../Components/Organisms/Banner";
import AboutUs from "../Components/Organs/AboutUs";
import Footer from "../Components/Organs/Footer";
import Blogs from "../Components/Organs/Blogs";
import ContactUs from "../Components/Organs/ContactUs";
import OurTestimonial from "../Components/Organisms/OurTestimonial";

import { useApiContext } from "../Contexts/ApiContext";


import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const HomePage: React.FC = () => {
  //const { getLatestNews } = useApiContext();
  const location = useLocation();

  useEffect(() => {
    // Function to scroll to the section
    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Parse the URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const sectionId = queryParams.get("section");

    if (sectionId) {
      // If there's a section ID in the query, scroll to the section
      scrollToSection(sectionId);
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Prime IT - IT risinājumi jūsu biznesam</title>
        <meta
          name="description"
          content="Mūsu misija ir izveidot pielāgotas tīmekļa vietnes un tīmekļa
      lietojumprogrammas, kas pilnīgi atbilst jūsu unikālajām vajadzībām.
      Mēs esam šeit, lai klausītos, komunicētu un pārvērstu jūsu idejas
      realitātē."
        />
        <meta
          name="keywords"
          content="tīmekļa vietņu izveide, mājas lapu izveide , sistēmu izstrāde, mākoņu uzstādīšana, cloud, IT risinājumi, programmatūras izstrāde, uzņēmuma IT, tehnoloģijas"
        />
        <meta
          property="og:title"
          content="Prime IT - IT risinājumi jūsu biznesam"
        />
        <meta
          property="og:description"
          content="Mūsu misija ir izveidot pielāgotas tīmekļa vietnes un tīmekļa lietojumprogrammas, kas pilnīgi atbilst jūsu unikālajām vajadzībām. Mēs esam šeit, lai klausītos, komunicētu un pārvērstu jūsu idejas realitātē."
        />
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Blogs></Blogs>

      <ContactUs></ContactUs>

      <OurTestimonial></OurTestimonial>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
