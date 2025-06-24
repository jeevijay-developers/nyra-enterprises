import React from "react";
import "./BusinessActivities.css";

const BusinessActivities = () => {
  return (
    <section className="container my-5 p-4 business-activities-section rounded shadow-sm">
      <h2 className="text-center fw-bold mb-5">Our Business Activities</h2>

      {/* Image Grid */}
      <div className="row g-4 text-center">
        {[
          { src: "/img/nyraOfc/opticalfiber.jpg", label: "Optical Fiber" },
          {
            src: "/img/nyraOfc//internetconnectivity.jpg",
            label: "Internet Connectivity",
          },
          {
            src: "/img/nyraOfc/wirelessconnectivity.jpg",
            label: "Wireless Connectivity",
          },
          {
            src: "/img/nyraOfc//vpn.jpg",
            label: "VPN Branch Office Connectivity",
          },
          {
            src: "/img/nyraOfc/wiredconnectivity.jpg",
            label: "Wired Connectivity",
          },
        ].map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm border-0 business-card">
              <img src={item.src} className="card-img-top" alt={item.label} />
              <div className="card-body">
                <p className="card-text fw-semibold">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activities List */}
      <div className="row mt-20">
        <div className="col-md-10 mx-auto">
          <h4 className="fw-semibold mb-3 text-center">Our Key Services</h4>
          <ul className="list-unstyled fs-6">
            {[
              "Owning, Installing, Commissioning and Maintaining OFC Network",
              "Integrated Campus Solutions: Network, Data Centre & Cameras",
              "CCTV Surveillance Projects, Network and O&M",
              "Enterprise Data Solutions / Essential Supplies",
              "OFC Turnkey Project",
              "Telecom OFC Project",
              "FTTX Rollout",
              "OFC Network O&M for Intra-city & Intercity Telecom Companies",
              "Last Mile Customer Link Delivery and In-building Solutions",
              "Underground Infrastructure for Oil/Power Sector & Smart City",
            ].map((item, i) => (
              <li key={i} className="mb-2 d-flex align-items-start">
                <span className="me-2 text-danger">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessActivities;
