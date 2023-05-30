import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import styles from "../style";
import "swiper/swiper-bundle.css";
import { hom1, hom2, hom3, hom4, hom5, hommobile } from "../assets";
import { useState } from "react";

const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const newSwiper = new Swiper(swiperRef.current, {
      slidesPerView: 4.2,
      loop: true,
      freeMode: true,
      autoplay: false,
      mousewheel: true,
      spaceBetween: 15,
    });

    setSwiper(newSwiper);

    return () => {
      newSwiper.destroy();
    };
  }, []);

  useEffect(() => {
    if (swiper) {
      const interval = setInterval(() => {
        if (swiper.autoplay && !swiper.autoplay.running) {
          swiper.autoplay.start();
        }
        swiper.slideNext();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [swiper]);

  return (
    <section
      className="flex flex-1 flex-col gap-8 items-center justify-center"
      id="home"
    >
      <div
        className={`${styles.paddingX} flex flex-1 flex-col gap-5 items-center justify-center`}
      >
        <h1 className="font-bold text-center sm:text-[55px] text-[45px]">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className={`text-[18px] text-black font-normal text-center w-[80%]`}>
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="flex items-center justify-center flex-1 w-[400px] sm:hidden">
        <img src={hommobile} alt="homeimg" className="" />
      </div>

      <div className="w-full h-[400px] swiper-container sm:block hidden" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom1}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom2}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom3}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom4}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom5}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom1}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom2}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom3}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
          <div className="swiper-slide w-[25%] h-full flex justify-center items-center">
            <img
              src={hom4}
              alt=""
              className="max-w-[100%] max-h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
