import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="cta -type-2">
      <div className="cta__bg">
        <Image width={1530} height={500} src="/img/cta/2/bg.png" alt="image" />

        <div className="cta__image">
          <Image
            width={750}
            height={600}
            src="/img/nayra/opticalfibre.jpg"
            alt="image"
          />
          <Image
            width="40"
            height="600"
            src="/img/cta/2/shape.svg"
            alt="image"
          />
          <Image
            width="390"
            height="35"
            src="/img/cta/2/shape2.svg"
            alt="image"
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-30  lh-13"
              >
                <span className="text-accent-1">About NYRA</span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                We specialize in owning, installing, commissioning, and
                maintaining OFC networks. Our expertise extends to integrated
                campus solutions, including network infrastructure, data
                centers, and camera systems tailored for buildings,
                universities, office campuses, and factories. We handle CCTV
                surveillance projects, network setups, and operations and
                maintenance (O&M). Additionally, we provide enterprise data
                solutions and essential IT supplies. Our services encompass OFC
                turnkey and telecom projects, FTTX rollouts, and comprehensive
                O&M for intra-city and intercity OFC networks for telecom
                companies. We also deliver last-mile customer link solutions and
                in-building connectivity. Furthermore, we offer advanced
                underground infrastructure solutions for the oil and power
                sectors, as well as for smart city initiatives.
              </p>

              <div className="mt-30 md:mt-20">
                {/* <button
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md -dark-1 bg-accent-1 text-white"
                > */}
                {/* <Link href="/tour-list-1">
                    Book Now
                    <i className="icon-arrow-top-right ml-10 text-16"></i>
                  </Link> */}
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
