"use client";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

export default function Information() {
  const stats = [
    {
      number: 1000,
      suffix: "+",
      label: "KM of OFC Network",
      icon: "/img/icons/network.png",
    },
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      icon: "/img/icons/experience.png",
    },
    {
      number: 100,
      suffix: "+",
      label: "Projects Completed",
      icon: "/img/icons/projects.png",
    },
    {
      number: "",
      suffix: "Mumbai",
      label: "Based OFC Company",
      icon: "/img/icons/location.png",
    },
  ];

  return (
    <section
      className="py-8 py-md-10"
      style={{
        background: "linear-gradient(to right, #e9f0fb, #edf2ff)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="card border-0 shadow-sm rounded-4 h-100 w-100 stat-card"
                style={{
                  background: "#fff",
                  minWidth: "220px",
                  maxWidth: "320px",
                  minHeight: "220px",
                  borderRadius: "2rem", // More rounded
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.04)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(44, 62, 80, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 0.5rem 1rem rgba(44, 62, 80, 0.07)";
                }}
              >
                <div className="card-body py-4 d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="fw-bold text-dark mb-2">
                    {item.number !== "" ? (
                      <>
                        <CountUp end={item.number} duration={2} />
                        {item.suffix}
                      </>
                    ) : (
                      item.suffix
                    )}
                  </h3>
                  <p className="text-muted mb-0">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 991.98px) {
          .stat-card {
            min-width: 80vw !important;
            max-width: 90vw !important;
            min-height: 180px !important;
          }
        }
        @media (max-width: 575.98px) {
          .stat-card {
            min-width: 95vw !important;
            max-width: 98vw !important;
            min-height: 150px !important;
            border-radius: 1.5rem !important;
          }
          section {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
