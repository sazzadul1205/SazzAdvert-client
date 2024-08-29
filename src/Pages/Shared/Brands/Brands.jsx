import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Brand1 from "../../../assets/Home/Brands/Brand1.png";
import Brand2 from "../../../assets/Home/Brands/Brand2.png";
import Brand3 from "../../../assets/Home/Brands/Brand3.png";
import Brand4 from "../../../assets/Home/Brands/Brand4.png";
import Brand5 from "../../../assets/Home/Brands/Brand5.png";
import Brand6 from "../../../assets/Home/Brands/Brand6.png";
import { NavLink } from "react-router-dom";


const brandsData = [
  { id: 1, image: Brand1, alt: "Altarnet1", link: "https://www.magix.com/" },
  { id: 2, image: Brand2, alt: "Altarnet2", link: "https://www.avon.com/" },
  { id: 3, image: Brand3, alt: "Altarnet3", link: "https://www.amd.com/en.html" },
  {
    id: 4,
    image: Brand4,
    alt: "Altarnet4",
    link: "https://velo.outsideonline.com/",
  },
  { id: 5, image: Brand5, alt: "Altarnet5", link: "https://www.ableton.com/" },
  { id: 6, image: Brand6, alt: "Altarnet6", link: "https://www.roblox.com/" },
];

const Brands = () => {
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
          Increase your brand’s revenue with Adli
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pb-24 border-b gap-6">
          {brandsData.map((brand) => (
            <NavLink
              key={brand.id}
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

export default Brands;
