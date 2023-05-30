import { arrow2, fea1, fea2, fea3 } from "../assets";
import styles from "../style";
import FeaturesData from "./FeaturesData";

const Features = () => {
  return (
    <section className={`${styles.paddingY}`} id="features">
      <h1 className={`${styles.heading2} mb-2 !font-normal`}>
        Featured products
      </h1>
      <div className="w-full bg-[#333333] h-[1px] "></div>
      <div className="grid mt-10 gap-10">
        <div className="grid sm:grid-cols-2 gap-6 place-items-center">
          <div className="w-[100%] sm:w-[80%] relative">
            <img
              src={fea1}
              alt="features"
              className="w-[100%] h-[80%] brightness-50 sm:brightness-100"
            />
            <h1 className="text-[22px] font-semibold font-poppins sm:text-left w-full sm:hidden block absolute text-white top-5 text-center">The Boolean Egyptian</h1>
            <img src={arrow2} alt="" className="w-[40px] sm:hidden block absolute right-5 bottom-5"/>
          </div>
          <FeaturesData />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 place-items-center gc">
          <div className="w-[100%] sm:w-[80%] relative item1">
            <img
              src={fea2}
              alt="features"
              className="w-[100%] h-[80%] brightness-50 sm:brightness-100"
            />
            <h1 className="text-[22px] font-semibold font-poppins sm:text-left w-full sm:hidden block absolute text-white top-5 text-center">The Boolean Egyptian</h1>
            <img src={arrow2} alt="" className="w-[40px] sm:hidden block absolute right-5 bottom-5"/>
          </div>
          <FeaturesData />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 place-items-center">
          <div className="w-[100%] sm:w-[80%] relative">
            <img
              src={fea3}
              alt="features"
              className="w-[100%] h-[80%]  brightness-50 sm:brightness-100"
            />
            <h1 className="text-[22px] font-semibold font-poppins sm:text-left w-full sm:hidden block absolute text-white top-5 text-center">The Boolean Egyptian</h1>
            <img src={arrow2} alt="" className="w-[40px] sm:hidden block absolute right-5 bottom-5"/>
          </div>
          <FeaturesData />
        </div>
      </div>
    </section>
  );
};

export default Features;
