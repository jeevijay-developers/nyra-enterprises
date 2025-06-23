"use client";

import { useEffect, useState } from "react";
import HeaderSerch from "../components/HeaderSerch";
import Destinations from "../components/Destinations";
import Activities from "../components/Activities";
// import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header1() {
  const router = useRouter();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [addClass, setAddClass] = useState(false);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header -type-1 js-header ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link href="/" className="header__logo">
              <Image
                width={400}
                height={80}
                src="/img/pageHeader/nyra.png"
                alt="logo icon"
                priority
                style={{
                  maxWidth: "300px",
                  height: "auto",
                  objectFit: "contain",
                  // Responsive height for mobile
                  maxHeight: "60px",
                }}
                className="header-logo-img"
              />
            </Link>
            {/* <div className="xl:d-none ml-30">
              <HeaderSerch />
            </div> */}
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div>

          <div className="header__right">
            {/* <Destinations />
            <Activities /> */}
            {/* <Currency /> */}
            {/* <Link href="/register" className="ml-10">
              Sign up
            </Link>

            <Link
              href="/login"
              className="button -sm -dark-1 bg-accent-1 rounded-200 text-white ml-30"
            >
              Log in
            </Link> */}

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn ml-30 js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <style jsx global>{`
        @media (max-width: 576px) {
          .header__container {
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
          .header__logo {
            max-height: 40px !important;
            display: flex;
            align-items: center;
          }
          .header-logo-img {
            max-height: 32px !important;
            width: auto !important;
          }
        }
      `}</style>
    </>
  );
}
