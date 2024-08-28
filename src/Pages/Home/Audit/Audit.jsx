import { Link } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Audit = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white pt-5 text-black pb-24">
      <div
        className="max-w-[1200px] mx-auto bg-[#F2F2F8] py-28 px-24 rounded-xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Left Section */}
          <h1 className="text-4xl font-bold">
            Transform Your Brand with High-Impact Paid Search Campaigns!
          </h1>

          {/* Right Section */}
          <div className="">
            <p className="mb-4 text-right">
              The team at Adli continuously monitors and optimizes our
              campaigns, keeping us ahead of the competition. Urgent need? Call
              us:
            </p>
            <h1 className="text-xl underline text-right mb-6">
              +1-485-456-0102
            </h1>
            <div className="text-right">
              <Link to="/Careers">
                <button className="bg-black text-white px-10 py-4 rounded-3xl hover:bg-[#d93c31] border-none font-bold text-sm">
                  GET IT FREE AUDIT {">"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
