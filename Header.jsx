  
import React from "react";
import profilePic from "../assets/profile-pic.jpg"; // replace with your image path

const Header = () => {
  return (
    <header id="home" style={{ marginTop: "90px" }}>
      <div>
        <img src={profilePic} alt="profile-pic" className="skill-img profile-pic-glow" />
        <h1>Hi I am <span>Name</span></h1>
        <p>Lorem ipsum dolor sit amet...</p>
        <a href="#projects" className="btn">View My Work</a>
        <br />
        <a href="/resume.pdf" className="btn" target="_blank" style={{ marginTop: "18px", display: "inline-block" }}>Resume</a>
      </div>
    </header>
  );
};

export default Header;
