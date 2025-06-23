import CompletedProjects from "@/components/projects/CompletedProjects";
import ProjectsInProgress from "@/components/projects/ProjectsInProgress";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-dark-subtle my-5">
        <CompletedProjects />
      </div>
      <hr
        style={{
          widows: "60%",
        }}
      />
      <div className="bg-dark-subtle my-5">
        <ProjectsInProgress />
      </div>
    </div>
  );
};

export default page;
