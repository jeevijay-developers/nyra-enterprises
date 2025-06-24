"use client";
import Image from "next/image";
import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

const ProjectExecution = () => {
  return (
    <section className="container my-5">
      {/* HDD (Horizontal Directional Drilling) Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-12">
          <div className="execution-card d-flex flex-wrap flex-md-nowrap align-items-center p-4 p-md-5 mb-4">
            {/* Text */}
            <div className="flex-grow-1 pe-md-5 mb-4 mb-md-0">
              <h2 className="mb-3 fw-bold text-primary">Project Execution</h2>
              <h4 className="ms-2 mb-4">
                HDD (Horizontal Directional Drilling)
              </h4>
              <ul className="list-unstyled fs-5">
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Adapting industry best practice for OFC laying
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Overcomes challenges of congestion at any open trenching
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Effective and Quality execution enables project completion on
                  time
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Fully Owned machinery and in house execution team.
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="flex-shrink-0 text-center">
              <Image
                width={300}
                height={300}
                src="/img/drill-444510_1280.jpg"
                alt="HDD Drilling"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: 350 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fiber Optic Splicing Card */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="execution-card d-flex flex-wrap flex-md-nowrap align-items-center p-4 p-md-5">
            {/* Image */}
            <div className="flex-shrink-0 text-center mb-4 mb-md-0 me-md-5">
              <Image
                width={300}
                height={300}
                src="/img/fiber-optic-4393369_1280.jpg"
                alt="Fiber Optic"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: 350 }}
              />
            </div>
            {/* Text */}
            <div className="flex-grow-1">
              <h4 className="fw-bold text-primary mb-4">
                Fiber Optic Splicing & Quality
              </h4>
              <ul className="list-unstyled fs-5">
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Maintaining splicing loss less than 0.05 dBm
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Fiber would be neatly coiled without kinks
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Minimum bending radius of 80mm would be ensured
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Joint closure would be sealed properly before it is taken out
                  of the control
                </li>
                <li className="d-flex align-items-center mb-2">
                  <TiArrowForwardOutline className="me-2 text-danger" />
                  Environment free from dust particles and air-conditioned
                  splicing van
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .execution-card {
          background: linear-gradient(135deg, #f8fbff 0%, #e9f0fb 100%);
          border-radius: 2rem;
          box-shadow: 0 4px 32px rgba(44, 62, 80, 0.1);
          border: 1px solid #e3eefe;
          margin-bottom: 2rem;
        }
        .execution-card h2,
        .execution-card h4 {
          letter-spacing: 0.5px;
        }
        .execution-card ul {
          margin-bottom: 0;
        }
        @media (max-width: 767.98px) {
          .execution-card {
            flex-direction: column !important;
            padding: 1.5rem !important;
            border-radius: 1.2rem !important;
          }
          .execution-card :global(img) {
            max-width: 90vw !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
export default ProjectExecution;