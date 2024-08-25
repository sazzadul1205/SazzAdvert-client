import { Link } from "react-router-dom";
import oupPro from "../../../assets/Home/OupPro.png";

const processSteps = [
  {
    id: 1,
    title: "Campaign Strategy",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive strategy.",
  },
  {
    id: 2,
    title: "Full Management",
    description:
      "We take full management of your campaigns to ensure all aspects are optimized for success, aligning with your business goals.",
  },
  {
    id: 3,
    title: "Transparency",
    description:
      "We maintain full transparency with our clients, providing detailed reports and insights into the performance of your campaigns.",
  },
];

const OurProcess = () => {
  return (
    <div className="bg-white text-black pb-10">
      <div className="max-w-[1200px] mx-auto justify-around ">
        {/* Top */}
        <div className="text-center w-[648px] mx-auto">
          <p className="font-semibold text-lg">OUR PROCESS</p>
          <h1 className="font-bold text-4xl">
            Your path to paid search excellence starts here!
          </h1>
        </div>
        {/* Bottom */}
        <div className="flex justify-between mt-10 gap-10">
          {/* Left */}
          <div className="space-y-10">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="flex items-start hover:text-red-500 text-gray-200"
              >
                <p className="text-[75px] mr-4 mt-2 font-bold pt-12">
                  {step.id}
                </p>
                <div className="w-[445px]">
                  <h1 className="text-2xl font-semibold text-black">
                    {step.title}
                  </h1>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right */}
          <div className="relative">
            <img src={oupPro} alt="Process" className="w-[700px] h-[405px]" />
            <Link to={"/Careers"}>
              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-10 py-4 rounded-3xl hover:bg-[#d93c31] border-none">
                Get Proposal {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
