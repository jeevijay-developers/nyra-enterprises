"use client";
import Image from "next/image";
import React from "react";

const ProjectManagement = () => {
  return (
    <section className="container my-5">
      {/* Project Management Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-12">
          <div className="project-card d-flex flex-wrap flex-md-nowrap align-items-center p-4 p-md-5 mb-4">
            {/* Text */}
            <div className="flex-grow-1 pe-md-5 mb-4 mb-md-0">
              <h2 className="mb-3 fw-bold text-primary">Project Management</h2>
              <ul className="list-unstyled fs-5">
                <li>
                  Project management services as a specialized service that
                  provides its clients end-to-end project management Services
                  encompassing the entire life cycle of OFC infrastructure
                  implementation starting from site survey to site Integration.
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="flex-shrink-0 text-center">
              <Image
                src="/img/pjmngt.jpg"
                alt="Project Management"
                width={300}
                height={300}
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: 350 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Compliance Card */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="project-card d-flex flex-wrap flex-md-nowrap align-items-center p-4 p-md-5">
            {/* Image */}
            <div className="flex-shrink-0 text-center mb-4 mb-md-0 me-md-5">
              <Image
                src="/img/process-4095965_1280.jpg"
                alt="Project Compliance"
                width={300}
                height={300}
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: 350 }}
              />
            </div>
            {/* Text */}
            <div className="flex-grow-1">
              <h2 className="mb-3 fw-bold text-primary">
                Project Compliance & Team
              </h2>
              <ul className="list-unstyled fs-5">
                Project Management helps complete compliance and ensure that all
                issues are strictly managed and controlled to the required
                specifications. NYRA Project Management Services also includes
                supply of skilled manpower for Project Management activities on
                a time and expenses basis. Project Management team are extremely
                focused on complying with the safety and environment aspects of
                the projects.
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: linear-gradient(135deg, #f8fbff 0%, #e9f0fb 100%);
          border-radius: 2rem;
          box-shadow: 0 4px 32px rgba(44, 62, 80, 0.1);
          border: 1px solid #e3eefe;
          margin-bottom: 2rem;
          overflow: hidden;
        }
        .project-card h2 {
          letter-spacing: 0.5px;
        }
        .project-card ul {
          margin-bottom: 0;
        }
        @media (max-width: 767.98px) {
          .project-card {
            flex-direction: column !important;
            padding: 1.5rem !important;
            border-radius: 1.2rem !important;
          }
          .project-card :global(img) {
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectManagement;
