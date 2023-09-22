<div className="image-grid">
  {rows.map((row, rowIndex) => (
    <div key={rowIndex} className="image-row">
      {row.map((imageData, index) => (
        <div key={index} data-id={index}>
          <ImageCard
            image={imageData.image}
            tags={imageData.tags}
          />
        </div>
      ))}
    </div>
  ))}
</div>;
