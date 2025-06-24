"use client";
import Image from "next/image";
import React from "react";

export default function FeaturesOne() {
  return (
    <section
      className="py-5 py-md-10"
      style={{
        background: "linear-gradient(135deg, #e3f0ff 0%, #f0f7fa 100%)",
        minHeight: "100vh",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5 text-center">
          <div className="col-lg-8 py-10">
            <h2 className="fw-bold text-dark mb-3">Vision & Mission</h2>
            <p className="text-muted">
              We are driven by purpose, powered by innovation.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Vision Card */}
          <div className="col-md-6 mb-4 d-flex h-100">
            <div
              className="card border-0 feature-card h-100 w-100"
              style={{
                background: "#fff",
                border: "1px solid #d0e3ff",
                borderRadius: "2rem", // More rounded
                boxShadow: "0 4px 24px rgba(44, 62, 80, 0.10)", // Box shadow
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
            >
              <div className="card-body p-5 d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "linear-gradient(135deg, #5b76f7, #678dfd)",
                      boxShadow: "0 4px 16px rgba(91, 118, 247, 0.15)",
                    }}
                  >
                    <Image
                      src="/img/icons/vision.png"
                      alt="Vision Icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="mb-0 fw-bold text-dark">Vision</h3>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-2">
                    We are a customer focused company that values our customers as
                    the foundation of our business. We facilitate our customers to
                    build remarkable values based on information and communication
                    services innovation.
                  </p>
                  <p className="text-muted mb-0">
                    We strive to give our client's competitive edge in their
                    respective industries through the provision of market leading
                    communication products. We are dedicated to enhancing their
                    service levels, improving their workplace efficiencies and
                    increasing their productivity levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6 mb-4 d-flex h-100">
            <div
              className="card border-0 feature-card h-100 w-100"
              style={{
                background: "#fff",
                border: "1px solid #b2f0e6", // Unique border color for Mission
                borderRadius: "2rem", // More rounded
                boxShadow: "0 4px 24px rgba(44, 62, 80, 0.10)", // Box shadow
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
            >
              <div className="card-body p-5 d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "linear-gradient(135deg, #00b4b0, #00d4c6)",
                      boxShadow: "0 4px 16px rgba(0, 180, 176, 0.15)",
                    }}
                  >
                    <Image
                      src="/img/icons/mission.png"
                      alt="Mission Icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="mb-0 fw-bold text-dark">Mission</h3>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-2">
                    We strive to provide the most reliable and superb
                    communication solutions that exceed customer needs by enabling
                    us to be a preferred data solution partner.
                  </p>
                  <p className="text-muted mb-0">
                    We will continue to be an independent company to create,
                    develop and maintain the specialized city based Telecom Optic
                    Fiber Cable Network and to be part of our national requirement
                    to enhance economical growth path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 32px rgba(44, 62, 80, 0.18);
          border-color: #5b76f7 !important;
        }
        @media (max-width: 767.98px) {
          .feature-card {
            border-radius: 1.2rem !important;
            min-width: 95vw !important;
            max-width: 98vw !important;
          }
          .card-body {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
