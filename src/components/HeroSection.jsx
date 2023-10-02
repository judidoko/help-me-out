// import HeroImg from "../assets/images/hero.jpg";
import HeroImg from "/images/hero.jpg";

import { PiArrowRightLight } from "react-icons/pi";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto px-8 bg-white flex justify-center items-center gap-3">
        <div>
          <h1 className="text-[#141414] text-6xl font-bold">
            Show Them <br /> Don’t Just Tell
          </h1>
          <p className="my-4">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button className="flex justify-center items-center gap-2 bg-[#120B48] rounded-lg text-white text-base py-5 px-6">
            Install HelpMeOut
            <PiArrowRightLight />
          </button>
        </div>
        <div className="md:w-[100%]">
          <img src={HeroImg} alt="Hero pics" className="max-w-full" />
        </div>
      </div>
      <div className="bg-gray-200 p-8"></div>
    </>
  );
};

export default HeroSection;
