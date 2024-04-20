import React, { useState, useEffect } from "react";
import dark from "../assets/Images/dark.jpg";
import { sliderImages } from "../constants";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sliderImages.length]);

  return (
    <div className="relative">
      <img className="w-screen h-2/3" src={dark} alt="outer bg" />

      <div className="absolute top-0 left-0 w-full h-full px-3  sm:padding-x">
        <div className="absolute inset-0 bg-darkBlack opacity-70"></div>
        <img
          className="w-screen z-30 relative rounded-xl shadow-sm shadow-yellowGlight sm:mt-9 mt-4 overflow-hidden"
          src={sliderImages[currentImageIndex]}
          alt="carousel image"
        />
      </div>
    </div>
  );
};

export default Slider;
