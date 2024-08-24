"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Portfolio Website",
    image: "/images/projects/portfolio-react.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Prana Flow | Health and Wellness Website",
    description: "Health and well being landing page focused on yoga and pranayama.",
    image: "/images/projects/prana-flow.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/termuux/prana-flow",
    previewUrl: "https://termuux.github.io/prana-flow/index.html",
  },
  {
    id: 3,
    title: "School Educational Platform Website",
    description: "Educational website showcasing educational websites achievements.",
    image: "/images/projects/e-school.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/termuux/e-campus",
    previewUrl: "https://e-campus-sapy.vercel.app/",
  },
  {
    id: 4,
    title: "Project Blind",
    description: "Helping visually impaireds navigate through the world.",
    image: "/images/projects/pblind.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/termuux/pblind",
    previewUrl: "https://github.com/termuux/pblind",
  },
  {
    id: 5,
    title: "Tragick | Supply Chain Management Blockchain System",
    description: "Custom supply chain management system in blockchain nodes.",
    image: "/images/projects/blockchain-hedera.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/termuux/tragick",
    previewUrl: "https://github.com/termuux/tragick",
  },
  {
    id: 6,
    title: "E Commerce Application | Flutter",
    description: "E Commerce Flutter application",
    image: "/images/projects/pblind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/termuux/e-commerce-app",
    previewUrl: "https://github.com/termuux/e-commerce-app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
