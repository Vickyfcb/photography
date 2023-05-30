import React, { useState, useEffect } from "react";
import { hom1, hom2, hom3, hom4, hom5, hommobile } from "../assets";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`slider image ${i + 1}`}
          style={{ display: i === index ? "block" : "none" }}
          className=""
        />
      ))}
    </div>
  );
};

export default Slider;
