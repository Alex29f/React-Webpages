import * as React from "react";
import ProductCategories from "../../modules/views/ProductCategories";
import ProductSmokingHero from "../../modules/views/ProductSmokingHero";
import AppFooter from "../../modules/views/AppFooter";
import ProductHero from "../../modules/views/ProductHero";
import ProductValues from "../../modules/views/ProductValues";
import ProductHowItWorks from "../../modules/views/ProductHowItWorks";
import ProductCTA from "../../modules/views/ProductCTA";
import AppAppBar from "../../modules/views/AppAppBar";
import withRoot from "../../modules/withRoot";
import NoiseLayoutComponent from "./NoiseLayoutComponent";
import Consultation from "../../modules/components/Consultation";
import CompanyGrid from "../../modules/views/CompanyGrid";
import OurTestimonial from "../../modules/views/OurTestimonial";

function Index() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <ProductHero />
      <ProductValues />

      {/*<ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Consultation />*/}
      {/* <CompanyGrid /> */}
      <OurTestimonial />

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
