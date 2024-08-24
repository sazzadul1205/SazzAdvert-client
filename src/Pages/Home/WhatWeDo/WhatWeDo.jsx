import do1 from "../../../assets/Home/do1.png";
import do2 from "../../../assets/Home/do2.png";
import do3 from "../../../assets/Home/do3.png";
import do4 from "../../../assets/Home/do4.png";

const WhatWeDo = () => {
  return (
    <div className="bg-white text-black py-12">
      <div className="max-w-[1200px] mx-auto flex gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[40%]">
          <p className="text-xl font-semibold text-gray-600">WHAT WE DO</p>
          <h1 className="text-4xl font-bold leading-tight mt-4">
            Driving success through strategic paid search advertising!
          </h1>
          <a className="mt-6 inline-block text-black font-semibold hover:text-red-400 cursor-pointer">
            KNOW MORE ABOUT US{" "}
            <span className="text-red-500 text-xl">{">"}</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[60%]">
          <p className="text-gray-700 leading-relaxed">
            Transforming your brands online presence and generating meaningful
            results is our top priority at Adli. As a leading paid search ad
            agency, we bring together a unique blend of creativity and
            data-driven insights to elevate your campaigns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Campaign Strategy */}
            <div className=" items-start gap-4">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center">
                <img src={do1} alt="Campaign Strategy" />
              </div>
              <div>
                <h2 className="py-2 font-bold  text-xl">Campaign Strategy</h2>
                <p className="text-gray-600">
                  We work closely with clients to understand their business
                  goals, target audience, and budget. We develop a comprehensive
                  paid search strategy tailored to achieve success.
                </p>
              </div>
            </div>

            {/* Campaign Optimization */}
            <div className=" items-start gap-4">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center">
                <img src={do2} alt="Campaign Optimization" />
              </div>
              <div>
                <h2 className="py-2 font-bold  text-xl">
                  Campaign Optimization
                </h2>
                <p className="text-gray-600">
                  We continually optimize your campaigns to ensure maximum
                  effectiveness, focusing on performance improvements and budget
                  efficiency.
                </p>
              </div>
            </div>

            {/* Bid Management */}
            <div className=" items-start gap-4">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center">
                <img src={do3} alt="Bid Management" />
              </div>
              <div>
                <h2 className="py-2 font-bold  text-xl">Bid Management</h2>
                <p className="text-gray-600">
                  We employ strategic bid management to ensure your ads are
                  placed effectively, maximizing your return on investment.
                </p>
              </div>
            </div>

            {/* Performance Tracking */}
            <div className=" items-start gap-4">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center">
                <img src={do4} alt="Performance Tracking" />
              </div>
              <div>
                <h2 className="py-2 font-bold  text-xl">
                  Performance Tracking
                </h2>
                <p className="text-gray-600">
                  We provide detailed performance tracking, giving you insights
                  into the effectiveness of your campaigns and areas for
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
