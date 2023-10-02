import { Link } from "react-router-dom";
import { HashLink as Links } from "react-router-hash-link";
// import Logo from "../assets/images/logo.png";
import Logo from "/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto px-8 mt-4 fixed top-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-9">
            <Links
              to="#features_section"
              smooth
              className="text-base font-semibold"
            >
              Features
            </Links>
            <Links
              to="#howItWorks_section"
              smooth
              className="text-base font-semibold"
            >
              How it Works
            </Links>
          </div>
          <Links
            to="/sign-up"
            smooth
            className="text-[#120B48] text-2xl font-bold"
          >
            Get Start
          </Links>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
