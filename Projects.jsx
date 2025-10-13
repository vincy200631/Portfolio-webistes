  
import React from "react";

const projects = [
  { title: "PROJECT 1", desc: "Lorem ipsum..." },
  { title: "PROJECT 2", desc: "Lorem ipsum..." },
  { title: "PROJECT 3", desc: "Lorem ipsum..." },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects">
      {projects.map((p, i) => (
        <div className="card" key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
