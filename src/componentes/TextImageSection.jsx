// TextImageSection.jsx
import React from "react";
import "./TextImageSection.css";
import Scroll3DImage from './Scroll3DImage.jsx';

const TextImageSection = ({ title, text, image, reverse = false, color }) => {
  return (
    <section 
      className={`text-image-section ${reverse ? "reverse" : ""}`}
      style={color ? { backgroundColor: color } : {}}>
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-content">
        <Scroll3DImage src={image} />
      </div>
    </section>
  );
};

export default TextImageSection;
