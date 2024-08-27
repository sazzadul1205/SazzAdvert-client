import sparkle from "../../../assets/OurTeam/sparkle.png";

const JoinTeam = () => {
  return (
    <div className="bg-white pt-24 pb-24 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#FAF4F4] flex relative">
          <img
            src={sparkle}
            alt=""
            className="w-16 h-16 absolute bottom-20 left-32"
          />
          <div className="w-[670px] mx-auto text-center py-24">
            <h1 className="font-bold">
              A Symphony of Brilliance: Our Team, Your Symphony, A Harmonious
              Future
            </h1>
            <p className="pb-5">
              The team at Adli continuously monitors and optimizes our
              campaigns, keeping us ahead of the competition. Urgent need? call
              us
            </p>
            <button className="btn text-white px-10 rounded-3xl bg-[#ef4335] border-none">
              JOIN OUR TEAM {">"}
            </button>
          </div>
          <img
            src={sparkle}
            alt=""
            className="w-28 h-24 absolute top-20 right-32"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
