// import videoImg from "../assets/images/Video-Repository.jpg";
// import Icon1 from "../assets/images/Icon-placeholder1.jpg";
// import Icon2 from "../assets/images/Icon-placeholder2.jpg";
// import Icon3 from "../assets/images/Icon-placeholder3.jpg";
import videoImg from "/images/Video-Repository.jpg";
import Icon1 from "/images/Icon-placeholder1.jpg";
import Icon2 from "/images/Icon-placeholder2.jpg";
import Icon3 from "/images/Icon-placeholder3.jpg";

const Features = () => {
  return (
    <>
      <div id="features_section">
        <h2 className="text-center text-[#141414] text-4xl font-bold m-6">
          Features
        </h2>
        <p className="text-center text-[#616163] text-xl font-normal ">
          Key Highlights of Our Extension
        </p>
        <div className="container mx-auto px-8 flex justify-center items-center mt-6 gap-4">
          <div>
            <div className="flex gap-3">
              <div>
                <img src={Icon1} alt="Icon1" />
              </div>
              <div>
                <h2 className="text-xl text-[#1B233D] font-semibold">
                  Simple Screen Recording
                </h2>
                <p className="text-xl font-normal text-[#616163]">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img src={Icon2} alt="Icon2" />
              </div>
              <div>
                <h2 className="text-2xl text-[#1B233D] font-semibold">
                  Easy-to-Share URL
                </h2>
                <p className="text-xl font-normal text-[#616163]">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img src={Icon3} alt="Icon3" />
              </div>
              <div>
                <h2 className="text-2xl text-[#1B233D] font-semibold">
                  Revisit Recordings
                </h2>
                <p className="text-xl font-normal text-[#616163]">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[80%]">
            <img src={videoImg} alt="Video pics" />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-8"></div>
    </>
  );
};

export default Features;
