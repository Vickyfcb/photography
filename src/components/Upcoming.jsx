import styles from "../style";
import { upcomingbg } from "../assets";

const Upcoming = () => {
  return (
    <section className={`${styles.paddingY} bg-upcoming`} id="features">
      <div className={`${styles.paddingX} `}>
        <h1
          className={`text-left mb-2 !font-normal text-white text-[25px] sm:text-[30px]`}
        >
          See Upcoming Auctions and Exhibitions
        </h1>
        <div className="relative">
          <img src={upcomingbg} alt="background" className="ss:h-[100%] h-[350px]" />
          <div className="absolute ss:bottom-7 ss:left-7 bottom-32 left-7 max-w-[100%] md:max-w-[50%] ss:max-w-[50%] flex gap-5 items-start">
            <div className=" gap-3 flex flex-col items-end">
              <div className="ss:w-[20px] ss:h-[20px] w-[15px] h-[15px] bg-white rounded-full"></div>
              <h1 className="text-white ss:text-[50px] text-[40px]">01</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-[20px] leading-7 ">
                MONALISA REDEFINED <br /> IN STYLE.
              </h1>
              <p className="text-white text-[12px]">Start on : 08:00 GTS . Monday </p>
              <p className="text-white text-[15px] leading-5">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS. </p>
            </div>
          </div>
          <div className="absolute bottom-7 right-7 flex gap-5 items-center justify-center">
            <a href="#" className="text-white underline underline-offset-4">
              See more
            </a>
            <button className="text-white p-3 border rounded-[8px]">
              Set a reminder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
