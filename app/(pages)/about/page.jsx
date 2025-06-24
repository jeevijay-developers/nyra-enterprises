import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Banner from "@/components/pages/about/Banner";
import BusinessActivities from "@/components/pages/about/BusinessActivities";
import CoreStrength from "@/components/pages/about/CoreStrength";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import StatutoryRegistration from "@/components/pages/about/StatutoryRegistration";
import Team from "@/components/pages/about/Team";
import React from "react";

export const metadata = {
  title: "Ummed club kota",
  description: "",
};

export default function page() {
  return (
    <>
      <main className="container-lg">
        <Header1 />
        <Hero />
        <Information />
        {/* <Banner /> */}
        <FeaturesOne />
        <CoreStrength />
        <BusinessActivities />
        <StatutoryRegistration />
        {/* <div className="mt-60">
          <FeturesTwo />
        </div>
        <TestimonialOne />
        <BannerOne /> */}
        {/* <Team />
        <BrandsOne /> */}
        <FooterOne />
      </main>
    </>
  );
}
