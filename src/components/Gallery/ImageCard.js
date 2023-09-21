import React, { useRef } from "react";

const ImageCard = ({ image, tags, onTagClick }) => {
  const imageRef = useRef(null);

  return (
    <div className="image-card" ref={imageRef}>
      <img src={`/images/${image}`} alt={image} />
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} onClick={() => onTagClick(tag)}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
