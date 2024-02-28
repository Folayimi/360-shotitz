import React from "react";
import Carousel from "react-carousel";

const MyCarousel = () => {
  const images = [
    "/shoot1.jpeg",
    "/shoot1.jpeg",
    "/shoot1.jpeg",
    // Add more image URLs as needed
  ];

  return (
    <Carousel slidesPerPage={3} autoPlay={3000} animationSpeed={1000} infinite>
      {images.map((image, index) => {
        return (
          <>
            <img src={image} alt={`${image}+${index + 1}`} />
          </>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
