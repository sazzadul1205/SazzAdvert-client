import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API fetch for Blogs Data
  const axiosPublic = useAxiosPublic();
  const {
    data: blogData = [], // Default to an empty array to avoid errors before data is fetched
    isLoading: blogsLoading,
    error: blogsError,
  } = useQuery({
    queryKey: ["blogData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Blogs`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: BlogsTitleData = [], // Default to an empty array to avoid errors before data is fetched
    isLoading: titleDataLoading,
    error: titleDataError,
  } = useQuery({
    queryKey: ["BlogsTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Blogs`);
      return res.data;
    },
  });

  // Extract the first item from the BlogsTitleData array
  const titleData = BlogsTitleData[0] || {};

  if (blogsLoading || titleDataLoading) {
    return <div>Loading...</div>;
  }

  if (blogsError || titleDataError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="bg-white text-black pb-24">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="w-[645px] mx-auto text-center pb-10">
          <p className="font-semibold text-lg">{titleData.title}</p>
          <h1 className="font-bold text-4xl">{titleData.description}</h1>
        </div>
        {/* All Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogData.slice(0, 3).map((blog) => (
            <div
              key={blog._id}
              className="bg-[#faf4f4] shadow-xl transform transition-transform duration-300 hover:-translate-y-2 rounded-xl"
            >
              <div className="flex px-12 pt-10">
                <img
                  src="https://i.imgur.com/K7JSBpc.png"
                  alt="Posted by icon"
                  className="mr-4 w-8 h-8"
                />
                <div>
                  <p>Posted by</p>
                  <p className="font-bold">{blog.postedBy}</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="rounded-xl w-full h-[210px] object-cover"
                />
              </figure>
              <div className="px-10 pb-10">
                <h2 className="text-[22px] font-semibold pt-5">{blog.title}</h2>
                <div className="pt-4 flex flex-wrap gap-2">
                  {blog.categories.map((category, index) => (
                    <button
                      key={index}
                      className="bg-[#FFEEEE] p-2 rounded-full text-sm"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
