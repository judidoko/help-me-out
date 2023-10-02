import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Logo from "/images/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container mx-auto px-8 mt-10 mb-8">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="flex flex-col justify-center items-center m-auto w-[450px]">
          <h2 className="text-gray-900 text-3xl tracking-wide font-bold mb-1">
            Log in or Sign Up
          </h2>
          <p className="text-center text-base font-normal">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
          <form className="w-full">
            <div className="w-full mt-8 mb-3">
              <button className="w-full border p-4 rounded-2xl flex justify-center items-center gap-2 mb-4">
                <FcGoogle />
                Continue with Google
              </button>
              <button className="w-full border p-4 rounded-2xl flex justify-center items-center gap-2">
                <FaFacebook />
                Continue with Facebook
              </button>
            </div>
            <div className="w-full mb-4">
              <p>
                <span>
                  <hr />
                </span>
                or
                <span>
                  <hr />
                </span>
              </p>
            </div>
            <div className="mb-4">
              <input
                className="w-full rounded-2xl p-4 border"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full rounded-2xl p-4 border"
                type="password"
                placeholder="Enter your password address"
              />
            </div>
            <button className="w-full bg-[#120B48] text-white p-4 rounded-lg">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
