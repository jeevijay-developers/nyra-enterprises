"use client";
import React from "react";

// Example features array with emojis (replace with your own or keep using images)
const features = [
  {
    icon: "🚀",
    title: "Fast Deployment",
    text: "Quick and reliable project execution for all clients.",
  },
  {
    icon: "🔒",
    title: "Secure Solutions",
    text: "Top-notch security for your infrastructure and data.",
  },
  {
    icon: "💡",
    title: "Innovative Approach",
    text: "Always adopting the latest technology trends.",
  },
  {
    icon: "🤝",
    title: "Trusted Partner",
    text: "Building long-term relationships with our clients.",
  },
];

export default function FeaturesThree() {
  return (
    <section className="layout-pt-xl pb-10">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-30 mb-5">Why NYRA ENTERPRISES?</h2>
          </div>
        </div>

        <div className="row g-4 pt-40 sm:pt-20">
          {features.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="feature-card-custom text-center p-4 h-100">
                <div className="feature-card-icon mb-3">{elm.icon}</div>
                <h3 className="feature-card-title fw-bold mb-2">{elm.title}</h3>
                <p className="feature-card-text text-muted">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .feature-card-custom {
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px rgba(44, 62, 80, 0.12);
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #e3eefe;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 260px;
        }
        .feature-card-custom:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(44, 62, 80, 0.18);
          border-color: #5b76f7;
        }
        .feature-card-icon {
          font-size: 2.5rem;
          line-height: 1;
        }
        .feature-card-title {
          font-size: 1.2rem;
          color: #0a2259;
        }
        .feature-card-text {
          font-size: 1rem;
        }
        @media (max-width: 767.98px) {
          .feature-card-custom {
            min-height: 200px;
            padding: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}