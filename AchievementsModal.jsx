  
import React, { useState } from "react";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
// Add other certificates

const certImages = [cert1, cert2];

const AchievementsModal = ({ onClose }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + certImages.length) % certImages.length);
  const next = () => setIndex((i) => (i + 1) % certImages.length);

  return (
    <div id="achievements-modal">
      <button id="close-achievements" onClick={onClose}>&times;</button>
      <h2>My Achievements</h2>
      <div className="cert-frame">
        <button className="cert-nav-btn" onClick={prev}>&#8592;</button>
        <img src={certImages[index]} alt="Certificate" className="cert-img" />
        <button className="cert-nav-btn" onClick={next}>&#8594;</button>
      </div>
    </div>
  );
};

export default AchievementsModal;
