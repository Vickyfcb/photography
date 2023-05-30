import styles from "../style"
import ExploreLine from "./ExploreLine"
import { arrowblue } from "../assets"

const Explore = () => {
  return (
    <section className={`py-16`} >
      <ExploreLine />
      <div className={`${styles.paddingX} flex flex-1 justify-between items-center py-4`}>
        <h1 className="text-[20px] font-semibold">Explore marketplace</h1>
        <img src={arrowblue} alt="arrow" className="w-[35px] sm:mr-24"/>
      </div>
      <ExploreLine />
      <div className={`${styles.paddingX} flex flex-1 justify-between items-center py-4`}>
        <h1 className="text-[20px] font-semibold">See auctions </h1>
        <img src={arrowblue} alt="arrow" className="w-[35px] sm:mr-24"/>
      </div>
      <ExploreLine />
    </section>
  )
}

export default Explore