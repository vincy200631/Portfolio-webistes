import React, { useState, useRef } from "react";

const skills = [
  { name: "React", img: "https://via.placeholder.com/150" },
  { name: "JavaScript", img: "https://via.placeholder.com/150" },
  { name: "HTML", img: "https://via.placeholder.com/150" },
  { name: "CSS", img: "https://via.placeholder.com/150" },
  { name: "Node.js", img: "https://via.placeholder.com/150" },
  { name: "Express", img: "https://via.placeholder.com/150" },
  { name: "MongoDB", img: "https://via.placeholder.com/150" },
];

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-scroll-wrapper">
        <button id="scroll-left" onClick={() => scroll("left")}>&#8592;</button>
        <div className="skills" ref={scrollRef}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card ${activeCard === index ? "card-active" : ""}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
        <button id="scroll-right" onClick={() => scroll("right")}>&#8594;</button>
      </div>
    </section>
  );
};

export default Skills;