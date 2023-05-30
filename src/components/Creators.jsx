import styles from "../style";
import { cre1, cre2, cre3 } from "../assets";
import React, { useState, useEffect } from "react";
import { creators } from "../constants";
import CreatorsImg from "./CreatorsImg";


const Creators = ({img}) => {
  return (
    <section
      className={`${styles.paddingX} pt-12 sm:pt-20 pb-24 sm:pb-32 bg-[#E2E2E2] relative`}
    >
      <h1 className="font-bold sm:text-[30px] text-[28px] mb-12 sm:mb-20 text-[#161616]">
        TOP CREATORS OF <br /> THE WEEK
      </h1>
      <p className=" font-light text-[#00000091] text-[18px] sm:text-[20px] sm:w-[90%] text-center sm:text-left">
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there's always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
      <div className="flex items-start flex-col gap-1 absolute right-6 sm:right-16 bottom-5 sm:bottom-18">
        <h1 className="text-[20px] sm:text-[26px] font-extrabold">CIRCA</h1>
        <h1 className="text-[70px] sm:text-[85px] line-through font-extrabold">
          1985
        </h1>
      </div>
      <div className="absolute bottom-[-1rem] sm:right-52 right-12">
        <CreatorsImg />
      </div>
    </section>
  );
};

export default Creators;
