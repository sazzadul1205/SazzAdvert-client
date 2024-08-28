import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className=" bg-[#FFE6E6] text-black py-12">
      <div className=" max-w-[1200px] mx-auto bg-white pb-20">
        <div className="text-center w-[600px] mx-auto pt-20">
          <p className="font-semibold">OUR PROCESS</p>
          <h1 className="font-bold">
            Your path to paid search excellence starts here!
          </h1>
        </div>
        <div className="pt-10 px-20">
          <div className="grid grid-cols-3 gap-14" data-aos="fade-up">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="items-start hover:text-red-500 text-gray-200"
              >
                <p className="text-[75px] mr-4 mt-2 font-bold pt-12">
                  {step.id}
                </p>
                <div className=" ">
                  <h1 className="text-2xl font-semibold text-black">
                    {step.title}
                  </h1>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
