import PropTypes from 'prop-types';

const FirstBanner = ({ SuccessStoriesPageBanner }) => {
  return (
    <div className="bg-[#FFE6E6] py-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {SuccessStoriesPageBanner.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {SuccessStoriesPageBanner.heading}
          </h1>
          <p className="text-[16px] mb-12 leading-relaxed">
            {SuccessStoriesPageBanner.description}
          </p>
        </div>
        <div className="w-[612px] h-[545px]">
          <img
            src={SuccessStoriesPageBanner.imageUrl}
            alt={SuccessStoriesPageBanner.heading} 
            className="w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

// Adding prop types for validation
FirstBanner.propTypes = {
  SuccessStoriesPageBanner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default FirstBanner;
