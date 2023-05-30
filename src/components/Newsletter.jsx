import React from "react";
import styles from "../style";

const Newsletter = () => {
  return (
    <section className={`pt-20 pb-14`}>
      <div className="flex flex-col sm:items-center items-start gap-5 py-10 px-3 border border-solid border-[#333333]">
        <h1 className="font-semibold text-[25px]">NEWSLETTER</h1>
        <p className="uppercase text-[16px] font-normal">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <div className="flex sm:flex-row sm:justify-center flex-col gap-5 w-full">
          <input
            type="email"
            placeholder=" ENTER YOUR EMAIL HERE"
            id=""
            className="border border-solid sm:w-[40%] w-[80%] border-[#333333] h-[45px] px-4"
          />
          <button type="submit" className="uppercase bg-black text-white sm:w-[20%] w-[50%] p-3">Suscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
