import React from "react";
import "./StatutoryRegistration.css"; // for custom styles

const registrations = [
  "Goods And Service Tax",
  "Income Tax of India",
  "EPF Registration",
  "ESIC Registration",
  "Professional Tax",
  "MSME Registration",
];

const StatutoryRegistration = () => {
  return (
    <section className="py-5 statutory-section">
      <div className="container">
        <h2 className="text-center mb-14 fw-bold">Statutory Registration</h2>
        <div className="row align-items-center">
          {/* Left: List of Registrations */}
          <div className="col-md-6">
            <div className="registration-list">
              {registrations.map((item, index) => (
                <div key={index} className="reg-item shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 reg-img-grid">
              <img
                src="/img/nyraOfc/incometax.jpg"
                alt="Income Tax"
                className="img-fluid rounded shadow-sm reg-img"
              />
              <img
                src="/img/nyraOfc/msme.jpg"
                alt="MSME"
                className="img-fluid rounded shadow-sm reg-img"
              />
              <img
                src="/img/nyraOfc/GST.jpg"
                alt="GST"
                className="img-fluid rounded shadow-sm reg-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatutoryRegistration;
