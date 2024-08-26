import Success1 from "../../../assets/SuccessStories/SuccessStories/Success1.jpg";
import Success2 from "../../../assets/SuccessStories/SuccessStories/Success2.jpg";
import Success3 from "../../../assets/SuccessStories/SuccessStories/Success3.jpg";
import Success4 from "../../../assets/SuccessStories/SuccessStories/Success4.jpg";
import Success5 from "../../../assets/SuccessStories/SuccessStories/Success5.jpg";
import Success6 from "../../../assets/SuccessStories/SuccessStories/Success6.jpg";
import icon from "../../../assets/SuccessStories/SuccessStories/icon.png";

const StoryCard = ({ image, title, subtitle, large = false }) => (
  <div
    className={`relative ${
      large ? "w-[630px] h-[280px]" : "w-[280px] h-[280px]"
    }`}
  >
    <img src={image} className="rounded-xl w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl mx-5 p-3 mb-5">
      <div>
        <p className="text-2xl text-white pb-2">{title}</p>
        <p className="text-gray-300">{subtitle}</p>
      </div>
      <img
        src={icon}
        className="bg-slate-900 p-2 rounded-full hover:bg-white transition-colors"
        alt="icon"
      />
    </div>
  </div>
);

const SuccessStoriesPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="max-w-[1200px] mx-auto gap-8">
        <div className="text-black text-center  w-[640px] mx-auto pb-10">
          <p className="font-semibold">SUCCESS STORIES</p>
          <h1 className="font-bold ">Driving success through strategic paid search advertising!</h1>
        </div>
        {/* First Row */}
        <div className="flex gap-8">
          {/* Left Column - Small Stories */}
          <div className="flex  gap-8">
            <StoryCard
              image={Success1}
              title="HiBootstrap"
              subtitle="Premium Themes"
            />
            <StoryCard image={Success2} title="Bolster" subtitle="eCommerce" />
          </div>
          {/* Right Column - Big Story */}
          <StoryCard
            image={Success3}
            title="Shoponix"
            subtitle="eCommerce"
            large
          />
        </div>

        {/* Second Row */}
        <div className="pt-5 flex gap-8">
          {/* Left Column - Big Story */}
          <StoryCard
            image={Success4}
            title="Shoponix"
            subtitle="eCommerce"
            large
          />
          {/* Right Column - Small Stories */}
          <div className="flex  gap-8">
            <StoryCard
              image={Success5}
              title="HiBootstrap"
              subtitle="Premium Themes"
            />
            <StoryCard image={Success6} title="Bolster" subtitle="eCommerce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
