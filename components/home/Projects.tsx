import React from "react";
import Link from "next/link";
import projects from "@/data/content/projects";
import ProjectCard from "../projects/ProjectCard";
import SectionTitle from "../global/SectionTitle";

function Projects() {
  return (
    <section id="projects" className="w-screen px-4 py-10 max-w-6xl ">
      {/* Section Title (DO NOT REMOVE) */}
      <div id="learnmore">
        <SectionTitle title="My Development Portfolio" />
      </div>

      {/* Scrollable Project Cards */}
      <div className="overflow-x-auto hide-scrollbar ">
        <div className="flex gap-5 snap-x snap-mandatory px-1 sm:px-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[80%] sm:min-w-[320px] md:min-w-[370px] snap-start"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <p className="text-fun-light mt-2 text-xl">
          Scroll sideways to explore more.
        </p>
        {/* <Link href="/projects">
          <div className="mt-8 max-w-sm border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link> */}
      </div>
    </section>
  );
}

export default Projects;
