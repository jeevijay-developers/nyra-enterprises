"use client";
import React from "react";

const CoreStrength = () => {
  return (
    <section className="container my-5">
      {/* Core Strengths Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-12">
          <div className="core-card d-flex flex-wrap flex-md-nowrap align-items-center p-4 p-md-5 mb-4">
           
            {/* Text */}
            <div className="flex-grow-1 pe-md-5 mb-4 mb-md-0">
              <h2 className="mb-3 fw-bold text-primary">Core Strengths</h2>
              <ul className="list-unstyled fs-5">
                <li>
                  • Ability to plan, design and build Optical Network with
                  latest technology
                </li>
                <li>
                  • Network integration capability scales our efficiency to work
                  for active network
                </li>
                <li>
                  • The dedicated maintenance team to maintain uptime of any
                  size of network
                </li>
                <li>
                  • Having own tools, machineries and skilled resource curb the
                  dependencies
                </li>
                <li>
                  • Expertise to develop smart, safe and secure infrastructure
                  solutions
                </li>
                <li>
                  • More kind of project, O&M support system and Network
                  integration capability, Field Team and portfolio of complete
                  enterprise data products define our path to become Enterprise
                  Data Solution company
                </li>
              </ul>
            </div>

             {/* Image */}
            <div className="flex-shrink-0 text-center mb-4 mb-md-0 me-md-5">
              <img
                src="/img/nyraOfc/corestrength.jpg"
                alt="Core Strengths"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: 350 }}
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* UPS Card */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="core-card d-flex flex-wrap flex-md-nowrap align-items-center p-4 p-md-5">
            {/* Image */}
            <div className="flex-shrink-0 text-center mb-4 mb-md-0 me-md-5">
              <img
                src="/img/nyraOfc/ups.jpg"
                alt="UPS"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: 350 }}
              />
            </div>
            {/* Text */}
            <div className="flex-grow-1">
              <h2 className="mb-3 fw-bold text-primary">UPS</h2>
              <ul className="list-unstyled fs-5">
                <li>
                  • Nyra Enterprises is the unique Telecom Infrastructure
                  Service Provider Organization in place with complete expertise
                </li>
                <li>
                  • More than 5 years of rich experience comprising of various
                  project execution and planning
                </li>
                <li>
                  • Owned Machineries for OFC Infrastructure Roll-Out, Operation
                  & Maintenance
                </li>
                <li>
                  • Adopting industry best practices to continuously groom
                  processes to get effective workflow
                </li>
                <li>
                  • Customer satisfaction is the highest priority and
                  continuously enhancing on technology front
                </li>
                <li>
                  • Tied up with various outsource agencies to procure resources
                  for mitigate critical issues and large scale project execution
                </li>
                <li>
                  • Central monitoring system for entire network in place with
                  timely escalations to serve the customer in a better way
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .core-card {
          background: linear-gradient(135deg, #f8fbff 0%, #e9f0fb 100%);
          border-radius: 2rem;
          box-shadow: 0 4px 32px rgba(44, 62, 80, 0.1);
          border: 1px solid #e3eefe;
          margin-bottom: 2rem;
          overflow: hidden; /* ✨ Prevent content overflow */
        }
        .core-card h2 {
          letter-spacing: 0.5px;
        }
        .core-card ul {
          margin-bottom: 0;
        }
        .core-card img {
          max-width: 100%;
          height: auto;
        }
        @media (max-width: 767.98px) {
          .core-card {
            flex-direction: column !important;
            padding: 1.5rem !important;
            border-radius: 1.2rem !important;
          }
          .core-card img {
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CoreStrength;
