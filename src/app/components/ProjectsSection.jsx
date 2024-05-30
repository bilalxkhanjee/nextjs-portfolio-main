"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Travelogram",
    description: "It is a travel agency landing page design where you can book an Hotel, Flight Tickets & can Rent a Car",
    image: "/images/projects/32.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Imagine",
    description: "This is a car website where you can see the details of a car by searching it.",
    image: "/images/projects/33.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Doctor Online Appointment",
    description: "These are the screen designs where patient can doctor can communicate with each other.",
    image: "/images/projects/30.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AT Care",
    description: "HealthCare Consultation app Doctor Portal designed to access the record of the patients.",
    image: "/images/projects/28.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pak Travel",
    description: "Pak Railway is a Web app, designed to book tickets of the train.",
    image: "/images/projects/35.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Homestead-Connect",
    description: "It is a home service mobile app design where you can hire a person to do work for you.",
    image: "/images/projects/19.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Car Clinic",
    description: "This is a website design that is used to communicate with the car service company.",
    image: "/images/projects/25.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "New Beginning",
    description: "HealthCare Consultation website where you can schedule a meeting with a doctor",
    image: "/images/projects/17.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "BK Bank",
    description: "A Banking Mobile App design where you can put your money virtually",
    image: "/images/projects/36.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Auto Repair Shop",
    description: "Auto Repair Shop ner me where you can find a shop on the map",
    image: "/images/projects/21.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Flipping Cards",
    description: "Multiple flipping cards animations the can be used in websites",
    image: "/images/projects/18.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Online Interview",
    description: "Web App where you can take an interview online of a person",
    image: "/images/projects/113.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Freelancing Platform",
    description: "Freelancing Gig Platform App for posting jobs and getting hired",
    image: "/images/projects/14.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 14,
    title: "Portfolio Website",
    description: "Creative UI Designer portfolio website for showcasing your projects",
    image: "/images/projects/23.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Health Website",
    description: "Health Care Website for communication between doctor and patient",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 16,
    title: "Sign-In",
    description: "Sign-In screen website design",
    image: "/images/projects/24.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 17,
    title: "Appnality",
    description: "It is a mobile app development service website",
    image: "/images/projects/121.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
