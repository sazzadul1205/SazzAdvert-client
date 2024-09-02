import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Box = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: BannerBlogsPage,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerBlogsPage"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=BlogsPage`);
      return res.data[0];
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-[#FFE6E6]">
      <div className="max-w-[1200px] mx-auto">
        <div>
          {/* Banner */}
          <div className="card bg-[#faf4f4] w-full shadow-xl text-black">
            <div className="flex justify-between py-11 px-14">
              {/* Left */}
              <div>
                <div className="flex">
                  <img
                    src={BannerBlogsPage.postedBy.logo}
                    className="ml-5 w-8 h-8 "
                  />
                  <div className="ml-5">
                    <p>Posted by</p>
                    <p className="font-bold">{BannerBlogsPage.postedBy.name}</p>
                  </div>
                </div>
                <div className="card-actions pt-4 mt-5">
                  {BannerBlogsPage.buttons.map((buttonText, index) => (
                    <button
                      key={index}
                      className="bg-[#FFEEEE] hover:bg-red-600 hover:text-white p-4 rounded-full mx-1"
                    >
                      {buttonText}
                    </button>
                  ))}
                </div>
                <div className="mt-5">
                  <h2 className="text-4xl font-bold">
                    {BannerBlogsPage.title}
                  </h2>
                </div>
                <NavLink to={"/BlogDetails"}>
                  <p className="mt-10 hover:text-red-500 text-sm font-semibold">
                    READ MORE <span className="text-red-500">{">"}</span>
                  </p>
                </NavLink>
              </div>
              {/* Right */}
              <div>
                <img
                  src={BannerBlogsPage.bannerImage}
                  className="rounded-xl w-[600px] h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
