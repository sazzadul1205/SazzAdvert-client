import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  // API Fetch
  const axiosPublic = useAxiosPublic();
  const {
    data: Brands,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Brands"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Brands`);
      return res.data;
    },
  });

  // Handle loading and error states
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading brands data.</div>;

  return (
    <div className="bg-white pt-5">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <h1 className="text-center text-xl pb-12 text-black font-semibold">
          Increase your brand’s revenue with SazzVert
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pb-24 border-b gap-6">
          {Brands.slice(0, 6).map((brand) => (
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

export default Brands;
