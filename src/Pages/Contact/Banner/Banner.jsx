import PropTypes from "prop-types";

const Banner = ({ ContactPageBanner }) => {
  return (
    <div className="bg-[#FFE6E6] pt-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-[17px] mb-4 font-semibold">
            {ContactPageBanner?.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {ContactPageBanner?.heading}
          </h1>
          <h1 className="text-[16px] mb-12 leading-relaxed text-[#4C4C4C]">
            {ContactPageBanner?.description}
          </h1>
        </div>
        <div className="w-[612px] h-[490px]">
          <img
            src={ContactPageBanner?.imageUrl}
            alt={ContactPageBanner?.heading}
            className="w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for better type checking
Banner.propTypes = {
  ContactPageBanner: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export default Banner;
