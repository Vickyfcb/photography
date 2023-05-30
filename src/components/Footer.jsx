import React from "react";
import styles from "../style";
import { footerLinks } from "../constants";
import { mail, location } from "../assets";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`flex justify-start sm:justify-center sm:flex-row flex-col mb-8 w-full gap-2`}
      >
        <div className=" flex flex-col justify-center sm:min-w-[250px] min-w-[150px]">
          <h1 className="font-bold text-[32px]">ARTSY.</h1>
        </div>
        <div className=" flex flex-row justify-start gap-2 flex-wrap sm:mt-0 mt-10 items-center">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <ul className="list-none mt-4 flex flex-col gap-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[14px] leading-[20px] text-black cursor-pointer  "
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="ss:my-0 my-4 flex flex-col min-w-[150px] gap-3">
            <div className="flex items-center gap-2">
              <img src={mail} alt="mail" className="w-[26px]" />
              <p className="text-[14px] leading-[20px]">artsystudios@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={location} alt="mail" className="w-[26px]" />
              <p className="text-[14px] leading-[20px]">Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#333333] opacity-50 text[14px] font-semibold">Artsystudios © 2022. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
