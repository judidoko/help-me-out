// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import Logo from "../assets/images/logo.png";
import Logo from "/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto px-8 mt-4">
        <div className="flex items-center justify-between">
          <Link to="#home_section" smooth>
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-9">
            <Link
              to="#features_section"
              smooth
              className="text-base font-semibold"
            >
              Features
            </Link>
            <Link
              to="#howItWorks_section"
              smooth
              className="text-base font-semibold"
            >
              How it Works
            </Link>
          </div>
          <Link
            to="/sign-up"
            smooth
            className="text-[#120B48] text-2xl font-bold"
          >
            Get Start
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
