import Logo from "/images/logo-footer.jpg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#120B48] p-16 flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li>Home</li>
            <li className="my-4">Converter</li>
            <li>How it Works</li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-4">About us</h2>
          <ul>
            <li>About</li>
            <li className="my-4">Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-4">Screen Record</h2>
          <ul>
            <li>Browser Window</li>
            <li className="my-4">Desktop</li>
            <li>Application</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
