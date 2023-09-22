import React, { useRef } from "react";
import "./ImageCard.css";

const ImageCard = ({ image, tags }) => {
  const imageRef = useRef(null);

  return (
    <div className="image-card" ref={imageRef}>
      <img src={`/images/${image}`} alt={image} />
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
