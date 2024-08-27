import img1 from "../../../assets/OurTeam/Team/img1.jpg";
import img2 from "../../../assets/OurTeam/Team/img2.jpg";
import img3 from "../../../assets/OurTeam/Team/img3.jpg";
import img4 from "../../../assets/OurTeam/Team/img4.jpg";
import img5 from "../../../assets/OurTeam/Team/img5.jpg";
import img6 from "../../../assets/OurTeam/Team/img6.jpg";
import icon1 from "../../../assets/OurTeam/Team/icon1.png";
import icon2 from "../../../assets/OurTeam/Team/icon2.png";
import icon3 from "../../../assets/OurTeam/Team/icon3.png";
import icon4 from "../../../assets/OurTeam/Team/icon4.png";

const teamData = [
  {
    id: 1,
    img: img1,
    name: "Jammy Smith",
    position: "CTO at HiBootstrap",
    icons: [icon1, icon2, icon3, icon4],
  },
  {
    id: 2,
    img: img2,
    name: "Jane Doe",
    position: "CEO at HiBootstrap",
    icons: [icon1, icon2, icon3, icon4],
  },
  {
    id: 3,
    img: img3,
    name: "John Doe",
    position: "COO at HiBootstrap",
    icons: [icon1, icon2, icon3, icon4],
  },
  {
    id: 4,
    img: img4,
    name: "John Doe",
    position: "COO at HiBootstrap",
    icons: [icon1, icon2, icon3, icon4],
  },
  {
    id: 5,
    img: img5,
    name: "John Doe",
    position: "COO at HiBootstrap",
    icons: [icon1, icon2, icon3, icon4],
  },
  {
    id: 6,
    img: img6,
    name: "John Doe",
    position: "COO at HiBootstrap",
    icons: [icon1, icon2, icon3, icon4],
  },
];

const OurTeamContent = () => {
  return (
    <div className="bg-[#FFE6E6] pb-20">
      <div className="max-w-[1200px] mx-auto text-black">
        <div className="w-[600px] mx-auto text-center py-16">
          <p className="font-semibold">OUR TEAM</p>
          <h1 className="font-bold">
            Unstoppable Together: Our {"Team's"} Bond, Your Success Beyond
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-28 pb-20 border-b border-gray-300">
          {teamData.map((member) => (
            <div key={member.id} className="relative w-[500px] h-[350px] mb-20">
              <div className="absolute top-10 left-16 bg-[#f5f4f4] rounded-xl w-[350px] h-[400px] z-0"></div>
              <div className="relative flex">
                <img
                  src={member.img}
                  className="relative w-[350px] h-[350px] rounded z-10"
                />
                <div className="z-10 ml-5 mt-20">
                  {member.icons.map((icon, index) => (
                    <img key={index} src={icon} alt="" className="mb-4" />
                  ))}
                </div>
              </div>
              <div className="absolute left-20 z-20 px-4 py-2 rounded-md">
                <p className="font-bold text-xl pt-3">{member.name}</p>
                <p className="text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamContent;
