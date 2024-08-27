import img1 from "../../../assets/SuccessStoryDetails/img1.jpg";

const chapters = [
  {
    title: "Introduction:",
    content:
      "In a world inundated with digital noise, Offline Ad Agency, a trailblazing marketing firm, dared to embrace the beauty of tangible connections. Armed with creativity and a relentless drive to stand out, they embarked on a journey that would redefine advertising success in the physical realm. This is the story of how Offline Ad Agency's unwavering commitment to innovation, old-school charm, and personalized strategies led them to the pinnacle of offline advertising excellence.",
  },
  {
    title: "The Vision Takes Shape",
    content:
      "Founded by a group of marketing enthusiasts, Offline Ad Agency set out to challenge the status quo of digital dominance. They believed that the tangible power of billboards, print media, and direct mail had an indelible impact on audiences that transcended the fleeting impressions of screens. With a vision to rekindle the essence of human connection, they embarked on their mission.",
  },
  {
    title: "Crafting Memories, Inspiring Results",
    content:
      "Offline Ad Agency's commitment to crafting memorable experiences paid dividends. Their captivating billboards became landmarks, their print ads adorned coveted publications, and their direct mail campaigns sparked excitement in recipients' hearts. Brands began to witness tangible returns, witnessing not just engagement but lasting connections with their customers.",
  },
];

const HiBootstrap = () => {
  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6]">
      <div className="max-w-[1200px] mx-auto text-black">
        <div className="flex pt-10 justify-between gap-10">
          {/* Main Content */}
          <div className="w-2/3 mr-15">
            <p className="text-4xl font-bold mb-5">HiBootstrap</p>
            {chapters.map((chapter, index) => (
              <div key={index}>
                <p className="font-bold pb-3">{chapter.title}</p>
                <p className="pb-8">{chapter.content}</p>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="w-1/3">
            <div>
              <img
                src={img1}
                alt=""
                className=" rounded-3xl h-full w-[510px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiBootstrap;
