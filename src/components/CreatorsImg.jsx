import React from "react";
import styles from "../style";
import { cre1, cre2, cre3 } from "../assets";
import { useState } from "react";
import { useEffect } from "react";

function CreatorsImg() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => {
        if (currentImage === 3) {
          return 1;
        } else {
          return currentImage + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {currentImage === 1 && <img src={cre1} alt='img1' className="sm:w-[550px] w-[350px]" />}
      {currentImage === 2 && <img src={cre2} alt='img2' className="sm:w-[800px] w-[350px]" />}
      {currentImage === 3 && <img src={cre3} alt='img3' className="sm:w-[400px] w-[250px]" />}
    </div>
  );
}

export default CreatorsImg;
