import PropTypes from "prop-types";

const Banner = ({ OurTeamPageBanner }) => {
  return (
    <div className="bg-[#FFE6E6] py-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {OurTeamPageBanner.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {OurTeamPageBanner.description}
          </h1>
          <h1 className="text-[16px] mb-12 leading-relaxed">
            {OurTeamPageBanner.content}
          </h1>
        </div>
        <div className="w-[612px] h-[545px]">
          <img
            src={OurTeamPageBanner.imageUrl}
            alt={OurTeamPageBanner.description || "Team Banner Image"}
            className="w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

// Optional: PropTypes validation
Banner.propTypes = {
  OurTeamPageBanner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
