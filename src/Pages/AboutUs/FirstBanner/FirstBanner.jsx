import PropTypes from "prop-types";

const FirstBanner = ({ AboutUsPageBanner }) => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        {/* Left */}
        <div className="text-black w-[535px] mt-32">
          <p className="text-lg mb-4 font-semibold">
            {AboutUsPageBanner.left.subtitle}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {AboutUsPageBanner.left.title}
          </h1>
          <h1 className="text-[16px] mb-12">
            {AboutUsPageBanner.left.description}
          </h1>
          <div className="flex justify-between">
            {AboutUsPageBanner.left.stats.map((stat, index) => (
              <div key={index} className="items-center text-black">
                <img
                  src={stat.img}
                  alt={stat.text}
                  className="bg-white p-5 rounded-full w-20 h-20"
                />
                <div>
                  <p className="text-4xl font-bold py-4">{stat.value}</p>
                  <p className="text-lg">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="w-[522px] h-[365px]">
          <div className="relative">
            <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0"></div>
            <img
              src={AboutUsPageBanner.right.mainImg}
              className="relative w-full h-full rounded-xl z-10"
              alt="Main Banner"
            />
          </div>
          <div className="flex pt-10 gap-5 justify-center">
            {AboutUsPageBanner.right.icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="w-20"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding prop types for validation
FirstBanner.propTypes = {
  AboutUsPageBanner: PropTypes.shape({
    left: PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    right: PropTypes.shape({
      mainImg: PropTypes.string.isRequired,
      icons: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
};

export default FirstBanner;
