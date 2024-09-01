import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const FirstBanner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: AboutUsBanner,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["AboutUsBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=AboutUs`);
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
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        {/* Left */}
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {AboutUsBanner.left.subtitle}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {AboutUsBanner.left.title}
          </h1>
          <h1 className="text-[16px] mb-12">
            {AboutUsBanner.left.description}
          </h1>
          <div className="flex">
            {AboutUsBanner.left.stats.map((stat, index) => (
              <div key={index} className="items-center mr-10 text-black">
                <img
                  src={stat.img}
                  alt={stat.text}
                  className="bg-white p-4 rounded-full"
                />
                <div className="mt-4">
                  <p className="text-4xl font-bold pb-4">{stat.value}</p>
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
              src={AboutUsBanner.right.mainImg}
              className="relative w-full h-full rounded-xl z-10"
              alt="Main Banner"
            />
          </div>
          <div className="flex pt-10 gap-5 justify-center">
            {AboutUsBanner.right.icons.map((icon, index) => (
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

export default FirstBanner;
