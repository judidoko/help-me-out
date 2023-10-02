import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto px-8 mt-4">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="logo" />
          <div className="flex items-center gap-9">
            <Link to="#" className="text-base font-semibold">
              Features
            </Link>
            <Link to="#" className="text-base font-semibold">
              How it Works
            </Link>
          </div>
          <Link className="text-[#120B48] text-2xl font-bold">Get Start</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
