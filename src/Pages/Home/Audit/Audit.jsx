import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the JSON data as a JavaScript object
const auditData = {
  title: "Transform Your Brand with High-Impact Paid Search Campaigns!",
  description:
    "The team at Adli continuously monitors and optimizes our campaigns, keeping us ahead of the competition. Urgent need? Call us:",
  contactNumber: "+1-485-456-0102",
};

const Audit = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white pt-5 text-black pb-24">
      <div
        className="max-w-[1200px] mx-auto bg-[#F2F2F8] py-28 px-24 rounded-xl"
        data-aos="fade-up"z
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Left Section */}
          <h1 className="text-4xl font-bold">{auditData.title}</h1>

          {/* Right Section */}
          <div className="">
            <p className="mb-4 text-right">{auditData.description}</p>
            <h1 className="text-xl underline text-right mb-6">
              {auditData.contactNumber}
            </h1>
            <div className="text-right">
              <Link to={"/"}>
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
