import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import CompletedProjects from "@/components/projects/CompletedProjects";
import ProjectActivities from "@/components/projects/ProjectActivities";
import ProjectExecution from "@/components/projects/ProjectExecution";
import ProjectManagement from "@/components/projects/ProjectManagement";
import ProjectsInProgress from "@/components/projects/ProjectsInProgress";
import React from "react";

const page = () => {
  return (
    <main
      className="bg-dark-subtle p-2"
      style={{
        marginTop: "100px",
      }}
    >
      <Header1 />
      <div>
        <ProjectManagement />
      </div>
      <div className="bg-dark-subtle my-5">
        <CompletedProjects />
      </div>
      <hr
        style={{
          width: "60%",
          margin: "auto",
        }}
      />
      <div className="bg-dark-subtle my-5">
        <ProjectsInProgress />
      </div>
      <div>
        <ProjectActivities />
      </div>
      <div>
        <ProjectExecution />
      </div>
      <FooterOne />
    </main>
  );
};

export default page;
