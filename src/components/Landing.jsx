import img from "../assets/code.avif";
import HeroSection from "./HeroSection";
const Landing = () => {
  return (
    <>
        <div className="absolute -z-10 top-0 left-0 w-full">
          <img src={img} alt="image" width={"100%"} />
        </div>
        <HeroSection/>
    </>
  );
};

export default Landing;
