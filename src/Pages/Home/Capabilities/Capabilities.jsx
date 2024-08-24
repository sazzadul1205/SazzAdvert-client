import { Link } from "react-router-dom";
import arrow from "../../../assets/Home/arrow.png";
import ca1 from "../../../assets/Home/ca1.png";
import ca2 from "../../../assets/Home/ca2.png";
import ca3 from "../../../assets/Home/ca3.png";
import ca4 from "../../../assets/Home/ca4.png";

const cardData = [
  {
    id: 1,
    title: "Google Ads",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: ca1,
  },
  {
    id: 2,
    title: "Campaign Strategy",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: ca2,
  },
  {
    id: 3,
    title: "Performance Tracking",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: ca3,
  },
  {
    id: 4,
    title: "Bid Management",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: ca4,
  },
];

const Capabilities = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white text-black font-bold pb-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center py-10">
          {/* Left Section */}
          <div className="flex items-center">
            <div className="w-[500px]">
              <p className="text-xl font-semibold">CAPABILITIES</p>
              <h1 className="text-4xl mt-2">
                Drive traffic, generate leads, achieve success with our paid
                search services!
              </h1>
            </div>
            <img src={arrow} alt="Arrow" className="w-[246px] h-16 ml-2" />
          </div>

          {/* Right Section */}
          <div>
            <Link to={"/Careers"}>
              <button className="bg-black text-white px-10 py-4 rounded-3xl hover:bg-[#d93c31] border-none">
                Get Proposal {">"}
              </button>
            </Link>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-4 gap-28">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="h-[400px] w-[300px] bg-white rounded-xl px-5 py-10"
            >
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-5">
                <img src={card.image} alt={card.title} />
              </div>
              <h1 className="text-xl mb-4">{card.title}</h1>
              <p className="text-base font-normal mb-9">{card.description}</p>
              <button className="font-medium hover:text-red-500">
                READ MORE <span className="text-red-500">{">"}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
