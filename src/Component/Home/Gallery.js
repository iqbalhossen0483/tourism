import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/tourism/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }
  return (
    <div className='mb-10 mt-20 mx-3 md:mx-10'>
      <h3 className='header'>Tour Gallery</h3>
      <div className='gallery-wrapper'>
        {gallery.map((img) => (
          <img
            key={img._id}
            className={`overflow-hidden h-full object-cover ${
              img.size === "row"
                ? "row-span-2"
                : img.size === "col"
                ? "col-span-2 h-44 w-full"
                : ""
            }`}
            src={img.img}
            alt=''
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
