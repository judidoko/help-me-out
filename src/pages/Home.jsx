import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <HeroSection />
        <Features />
        <HowItWorks />
      </div>
    </>
  );
};

export default Home;
