import styles from "../style";
import { mcr1, mcr2, mcr3, mcr4, mcr5, arrow1 } from "../assets";

const FeaturesData = () => {
  return (
    <div className="flex items-center justify-center flex-1 flex-col gap-5 sm:w-[80%] w-[100%]">
      <h1 className="text-[22px] font-semibold font-poppins text-left w-full sm:block hidden">The Boolean Egyptian</h1>
      <p className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor pur.
      </p>
      <div className="flex items-center flex-row sm:justify-between gap-4 w-full">
        <div className="flex flex-row justify-between items-center">
          <img src={mcr1} alt="mcr" className="w-[30px] sm:w-[40px] mr-[-20px]" />
          <img src={mcr2} alt="mcr" className="w-[30px] sm:w-[40px] mr-[-10px]" />
          <img src={mcr3} alt="mcr" className="w-[30px] sm:w-[40px] mr-[-10px]" />
          <img src={mcr4} alt="mcr" className="w-[30px] sm:w-[40px] mr-[-10px]" />
          <img src={mcr5} alt="mcr" className="w-[30px] sm:w-[40px] mr-0" />
        </div>
        <p className="font-poppins text-[16px] font-normal">64 major creators</p>
        <img src={arrow1} alt="" className="w-[40px] sm:block hidden cursor-pointer"/>
      </div>
    </div>
  );
};

export default FeaturesData;
