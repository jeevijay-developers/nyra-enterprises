import React from "react";
import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import Image from "next/image";

export default function FooterOne() {
  return (
    <footer className="footer -type-1" >
      <div className="footer__main">
        <div className="footer__bg">
          <Image
            width="1800"
            height="627"
            src="/img/footer/1/bg.svg"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Contact Us{" "}
                      <span className="text-accent-1">7710021111</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">Follow Us</div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">Contact</h4>

                <div className="y-gap-10 mt-20" style={{ color: "#0a2259" }}>
                  <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                    Corporate Office:
                  </div>
                  <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                    Nyra Enterprises
                  </div>
                  <div>
                    13/Plot No 20, Ambe Kiran Society,
                    <br />
                    Sector 5, Ghansoli Navi Mumbai 400701
                  </div>
                  <div>
                    Contact:{" "}
                    <a
                      href="tel:+917710021111"
                      style={{ color: "#0a2259" }}
                    >
                      +91 7710021111
                    </a>
                  </div>
                  <div>
                    Web:{" "}
                    <a
                      href="http://www.nyraenterprises.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0a2259" }}
                    >
                      www.nyraenterprises.com
                    </a>
                  </div>
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:nyrajaiswal16@gmail.com"
                      style={{ color: "#0a2259" }}
                    >
                      nyrajaiswal16@gmail.com
                    </a>{" "}
                    /{" "}
                    <a
                      href="mailto:info@nyraenterprises.com"
                      style={{ color: "#0a2259" }}
                    >
                      info@nyraenterprises.com
                    </a>
                  </div>
                </div>
              </div>

              {/* <FooterLinks /> */}

              {/* <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Newsletter</h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div className="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>

                <h4 className="text-20 fw-500 mt-30">Mobile Apps</h4>

                <div className="mt-10">
                  <a className="d-flex items-center" href="#">
                    <i className="icon-apple text-16 mr-10"></i>
                    iOS App
                  </a>

                  <a className="d-flex items-center mt-10" href="#">
                    <i className="icon-android text-16 mr-10"></i>
                    Android App
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright Viatours {new Date().getFullYear()}</div>
            </div>

            <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
