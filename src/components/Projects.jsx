import React from "react";
import { styles } from "../style";
import ProjectsCard from "./cards/ProjectsCard";
import { minorProjects, projects } from "../constants/constants";

function Projects() {
  return (
    <div
      className={`w-full min-h-screen  ${styles.paddingX} pt-20 flex flex-col gap-12`}
    >
      <div className=" ">
        <h1 className=" font-bold text-2xl lg:text-6xl leading-9 lg:leading-20">
          Recent Projects and <br />{" "}
          <span className="text-green">Achivements</span>
        </h1>
      </div>
      <div className="w-full grid  grid-cols-1 lg:grid-cols-3 gap-10 items-start justify-items-center">
        {projects.map((project) => (
          <ProjectsCard data={project} />
        ))}
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-2xl lg:text-4xl">Minor Projects</h1>
        <div className="w-full grid  grid-cols-1 lg:grid-cols-3 gap-10 items-start justify-items-center">
          {projects.map((project) => (
            <ProjectsCard data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
