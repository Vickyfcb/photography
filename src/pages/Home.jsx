import styles from "../style";

import {
  Navbar,
  Hero,
  Features,
  Upcoming,
  Explore,
  Creators,
  Newsletter,
  Footer,
} from "../components";
const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} fixed w-full bg-white z-[100]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`mt-20 bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
        </div>
      </div>
      <div className={`${styles.boxWidth}`}>
        <Upcoming />
      </div>
      <div className={`${styles.boxWidth}`}>
        <Explore />
      </div>
      <div className={`${styles.boxWidth}`}>
        <Creators />
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
