import Image from "next/image";
import React from "react";

export default function BannerFour() {
  return (
    <section className="layout-pt-xxl layout-pb-xxl relative">
      {/* Background Image */}
      <div className="sectionBg relative">
        <Image
          src="/img/features/1/9.png"
          width={1920}
          height={700}
          alt="NYRA Enterprises - OFC Network"
          className="img-ratio w-full h-[700px] object-cover"
        />
        {/* Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Text Content */}
      <div className="container relative z-10">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-3xl text-white sm:text-xl mt-4 font-bold banner-text-shadow"
            >
              Building Smart, Secure Infrastructure
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-white text-lg sm:text-base mt-4 banner-text-shadow"
            >
              <span className="font-semibold">
                From OFC network development to Smart City integration—
                <br />
                NYRA Enterprises delivers scalable, reliable, and future-ready
                communication solutions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
