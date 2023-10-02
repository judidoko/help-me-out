import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "/images/video.jpg";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BiCopy } from "react-icons/bi";
import { BsFacebook, BsTelegram, BsWhatsapp } from "react-icons/bs";

const RecordingReady = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 bg-white pt-10 mt-10">
        <div className="flex sm:flex-row flex-col justify-between gap-10">
          <div className="w-full">
            <h2 className="text-[#141414] text-5xl font-bold mb-10">
              Your video is ready!
            </h2>
            <label className="text-[#727272] text-base">Name</label> <br />
            <div className="flex items-center w-full gap-4 mb-6">
              <input
                type="text"
                placeholder="Untitled_Video_20232509"
                className=""
              />
              <FaRegPenToSquare className="text-[#120B48]" />
            </div>
            <div className="flex items-center w-[60%] gap-4 bg-[#E7E7ED] py-[12px] px-[20px] rounded">
              <input
                type="email"
                placeholder="enter email of receiver"
                className="py-[10px] px-[18px] bg-[#E7E7ED]"
              />
              <button className="bg-[#605C84] text-white py-[10px] px-[18px] rounded">
                Send
              </button>
            </div>
            <div className="mt-8">
              <label>Video Url</label>
              <div className="flex items-center gap-8 bg-[#FAFAFA] text-[#929292] py-[10px] px-[16px] rounded">
                <input
                  type="text"
                  placeholder="https://www.helpmeout/Untitled_Video_20232509"
                  className="w-[400px] bg-[#FAFAFA]"
                />
                <button className="flex items-center border rounded py-2 px-4 gap-2">
                  <BiCopy />
                  Copy
                </button>
              </div>
              <div className="mt-8">
                <h4>Share your video </h4>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 border rounded py-[12px] px-[16px]">
                    <BsFacebook className="text-[#1877F2]" /> Facebook
                  </button>
                  <button className="flex items-center gap-2 border rounded py-[12px] px-[16px]">
                    <BsWhatsapp className="text-[#25D366]" />
                    WhatsApp
                  </button>
                  <button className="flex items-center gap-2 border rounded py-[12px] px-[16px]">
                    <BsTelegram className="text-[#229ED9]" /> Telegram
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-l-2">
            <div className="pl-8">
              <img src={Video} alt="Video" />
              <div>
                <h2 className="text-2xl font-bold py-8">Transcript</h2>
                <select className="py-2 px-4 border rounded">
                  <option>English</option>
                  <option>Saab</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                </select>
              </div>
              <div className="py-4 h-[200px]">
                <ol className="list-decimal list-outside">
                  <li>
                    First step. Open Facebook on your desktop or mobile device
                    and locate &quot;Marketplace&quot; in the left-hand menu or
                    at the top of the
                  </li>
                  <li>
                    First step. Open Facebook on your desktop or mobile device
                    and locate &quot;Marketplace&quot; in the left-hand menu or
                    at the top of the
                  </li>
                  <li>
                    First step. Open Facebook on your desktop or mobile device
                    and locate &quot;Marketplace&quot; in the left-hand menu or
                    at the top of the
                  </li>
                  <li>
                    First step. Open Facebook on your desktop or mobile device
                    and locate &quot;Marketplace&quot; in the left-hand menu or
                    at the top of the
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E7E7ED33] h-[320px] py-[48px] items-center px-[347px]">
          <h2 className="text-2xl font-bold text-center">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h2>
          <button className="bg-[#120B48] py-[16px] px-[32px]">Send</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecordingReady;
