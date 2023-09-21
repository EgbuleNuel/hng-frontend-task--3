import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Loader from "react-loader-spinner";
import Sortable from "sortablejs";

const Gallery = () => {
  const initialImages = [
    { id: 1, image: "image1.jpg", tags: ["Nature", "Scenic"] },
    { id: 2, image: "image2.jpg", tags: ["Nature", "Animals"] },
    // Add more image data objects here with tags
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading delay (remove this in production)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Initialize Sortable.js for drag-and-drop
  useEffect(() => {
    const galleryContainer = document.getElementById("image-gallery");
    const sortable = new Sortable(galleryContainer, {
      group: "image-gallery",
      animation: 150,
      onEnd: (e) => {
        // Handle image reordering here
        handleImageReorder(e.oldIndex, e.newIndex);
      },
    });

    return () => {
      sortable.destroy();
    };
  }, []);

  // Functions for tag filtering and image reordering
  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleImageReorder = (draggedImageIndex, droppedImageIndex) => {
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(draggedImageIndex, 1);
    updatedImages.splice(droppedImageIndex, 0, draggedImage);

    setImages(updatedImages);
  };

  return (
    <div className="gallery" id="image-gallery">
      {loading ? (
        // Show loading spinner while images are loading
        <div className="loader">
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="tags">{/* Your tag filter buttons */}</div>
          <div className="image-grid">
            {images
              .filter(
                (image) => !selectedTag || image.tags.includes(selectedTag)
              )
              .map((imageData, index) => (
                <ImageCard
                  key={index}
                  image={imageData.image}
                  tags={imageData.tags}
                  onTagClick={handleTagClick}
                  onImageReorder={handleImageReorder}
                  imageIndex={index}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
