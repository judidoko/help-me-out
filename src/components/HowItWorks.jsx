// import Vec from "../assets/images/rec.jpg";
import Vec from "/images/rec.jpg";

const HowItWorks = () => {
  return (
    <>
      <div id="howItWorks_section" className="container mx-auto px-8">
        <h2 className="text-center text-[#141414] text-4xl font-bold m-8">
          How Its Works
        </h2>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-x-32">
          <div>
            <h1 className="text-center text-4xl w-10 m-auto rounded-full text-white bg-[#120B48]">
              1
            </h1>
            <h2 className="text-3xl font-semibold text-[#1B233D]">
              Record Screen
            </h2>
            <p className="mb-4">
              Click the &quot;Start Recording&quot; button in our extension.
              choose which part of your screen to capture and who you want to
              send it to.
            </p>
            <img src={Vec} alt="record Sample" />
          </div>
          <div>
            <h1 className="text-center text-4xl w-10 m-auto rounded-full text-white bg-[#120B48]">
              2
            </h1>
            <h2 className="text-3xl font-semibold text-[#1B233D]">
              Share Your Recording
            </h2>
            <p className="mb-4">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={Vec} alt="record Sample" />
          </div>
          <div>
            <h1 className="text-center text-4xl w-10 m-auto rounded-full text-white bg-[#120B48]">
              3
            </h1>
            <h2 className="text-3xl font-semibold text-[#1B233D]">
              Learn Effortlessly
            </h2>
            <p className="mb-4">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={Vec} alt="record Sample" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
