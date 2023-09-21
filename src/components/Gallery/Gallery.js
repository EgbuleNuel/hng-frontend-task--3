import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { ThreeDots } from "react-loader-spinner";
import Sortable from "sortablejs";

const Gallery = () => {
  const initialImages = [
    { id: 1, image: "img-01.jpg", tags: ["Greenery"] },
    { id: 2, image: "img-02.jpg", tags: ["Greenery"] },
    { id: 3, image: "img-03.jpg", tags: ["Mountains"] },
    { id: 4, image: "img-04.jpg", tags: ["Mountains"] },
    { id: 5, image: "img-05.jpg", tags: ["Night", "Mountains"] },
    { id: 6, image: "img-06.jpg", tags: ["Greenery"] },
    { id: 7, image: "img-07.jpg", tags: ["Greenery"] },
    { id: 8, image: "img-08.jpg", tags: ["Water-bed"] },
    { id: 9, image: "img-09.jpg", tags: ["Greenery"] },
    { id: 10, image: "img-10.jpg", tags: ["Mountains", "Greenery"] },
    { id: 11, image: "img-11.jpg", tags: ["Water-bed"] },
    { id: 12, image: "img-12.jpg", tags: ["Sunset", "Greenery"] },
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleImageReorder = (draggedImageIndex, droppedImageIndex) => {
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(draggedImageIndex, 1);
    updatedImages.splice(droppedImageIndex, 0, draggedImage);

    setImages(updatedImages);
  };

  const filteredImages = images.filter((image) =>
    image.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Initialize Sortable.js for drag-and-drop
  useEffect(() => {
    const galleryContainer = document.getElementById("image-gallery");
    const sortable = new Sortable(galleryContainer, {
      group: "image-card",
      animation: 10,
      onEnd: (e) => {
        // Handle image reordering here
        handleImageReorder(e.oldIndex, e.newIndex);
      },
    });

    return () => {
      sortable.destroy();
    };
  }, [handleImageReorder]);

  return (
    <div className="gallery" id="image-gallery">
      {loading ? (
        <div className="loader">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search by tag"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="tags">{/* Your tag filter buttons */}</div>
          <div className="image-grid">
            {filteredImages.map((imageData, index) => (
              <div key={index} id="image-card" data-id={index}>
                <ImageCard
                  image={imageData.image}
                  tags={imageData.tags}
                  onTagClick={handleTagClick}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
