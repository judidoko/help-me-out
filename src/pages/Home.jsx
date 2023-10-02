import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <HeroSection />
        <Features />
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
};

export default Home;
