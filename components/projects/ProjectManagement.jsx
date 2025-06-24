import Image from "next/image";
import React from "react";

const ProjectManagement = () => {
  return (
    <div className="container-md">
      <div className="row justify-content-center align-items-center">
        <Image
          width={400}
          height={400}
          src="/img/pjmngt.jpg"
          alt="Award Image"
          className="img-fluid rounded shadow col col-lg-4 col-12 rounded-2"
        />
        <span
          className="w-fit col col-lg-8 col-12"
          style={{
            fontSize: "20px",
          }}
        >
          Project management services as a specialized service that provides its
          clients end –to-end project management Services encompassing the
          entire life cycle of OFC infrastructure implementation starting from
          site survey to site Integration.
        </span>
      </div>

      <div className="row justify-content-center align-items-center">
        <span
          className="w-fit col col-lg-8 col-12"
          style={{
            fontSize: "20px",
          }}
        >
          Project Management helps complete compliance and ensure that all
          issues are strictly managed and controlled to the required
          specifications.in addition, NYRA Project Management Services also
          includes Supply of skilled manpower for Project Management activities
          on basis time and expenses. project Management team are extremely
          focused on complying with the safely and environment aspects of the
          projects.
        </span>
        <Image
          width={400}
          height={400}
          src="/img/process-4095965_1280.jpg"
          alt="Award Image"
          className="img-fluid rounded shadow col col-lg-4 col-12 rounded-2"
        />
      </div>
    </div>
    // </div>
  );
};

export default ProjectManagement;
