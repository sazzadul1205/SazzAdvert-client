import Icon1 from "../../../assets/Services/Capabilities/Icon1.png";
import Icon2 from "../../../assets/Services/Capabilities/Icon2.png";
import Icon3 from "../../../assets/Services/Capabilities/Icon3.png";
import Icon4 from "../../../assets/Services/Capabilities/Icon4.png";
import Icon5 from "../../../assets/Services/Capabilities/Icon5.png";
import Icon6 from "../../../assets/Services/Capabilities/Icon6.png";
import Icon7 from "../../../assets/Services/Capabilities/Icon7.png";
import Icon8 from "../../../assets/Services/Capabilities/Icon8.png";

const cardData = [
  {
    id: 1,
    title: "Google Ads",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon1,
  },
  {
    id: 2,
    title: "Microsoft Ads",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon2,
  },
  {
    id: 3,
    title: "Social Media Ads",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon3,
  },
  {
    id: 4,
    title: "Shopping Campaign",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon4,
  },
  {
    id: 5,
    title: "Marketing Automation",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon5,
  },
  {
    id: 6,
    title: "Display Advertising",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon6,
  },
  {
    id: 7,
    title: "Paid Social Media",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon7,
  },
  {
    id: 8,
    title: "Native Advertising",
    description:
      "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive...",
    image: Icon8,
  },
];
const Capabilities = () => {
  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6] py-12 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-[645px] mx-auto text-center pb-20">
          <p className="font-semibold">CAPABILITIES</p>
          <h1 className="font-bold text-4xl">
            Drive traffic, generate leads, achieve success with our paid search
            services!
          </h1>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-4 gap-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="h-[390px] w-[300px] bg-white rounded-xl p-10 transform transition-transform duration-300 hover:-translate-y-2 sha"
            >
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-5">
                <img src={card.image} alt={card.title} />
              </div>
              <h1 className="text-xl mb-4 font-bold">{card.title}</h1>
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
