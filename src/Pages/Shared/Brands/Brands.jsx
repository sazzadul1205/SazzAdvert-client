import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types"; 
import { NavLink } from "react-router-dom";

const Brands = ({ BrandsData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
  }, []);

  return (
    <div className="bg-white pt-5">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <h1 className="text-center text-xl pb-12 text-black font-semibold">
          Increase your brand’s revenue with SazzVert
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pb-24 border-b gap-6">
          {BrandsData?.slice(0, 6).map((brand) => (
            <NavLink
              key={brand._id}
              to={brand.link}
              className="flex justify-center items-center transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={brand.image}
                alt={brand.alt}
                className="mx-auto h-20 object-contain"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for validation
Brands.propTypes = {
  BrandsData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};

export default Brands;
