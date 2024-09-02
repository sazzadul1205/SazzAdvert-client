import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const RightSide = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching Blog Details data
  const {
    data: BlogsDetailsData,
    isLoading: BlogsDetailsLoading,
    error: BlogsDetailsError,
  } = useQuery({
    queryKey: ["BlogsDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BlogsDetails`);
      return res.data;
    },
  });

  // Fetching Blog Categories data
  const {
    data: BlogsCategoriesData,
    isLoading: BlogsCategoriesLoading,
    error: BlogsCategoriesError,
  } = useQuery({
    queryKey: ["BlogsCategories"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BlogsCategories`);
      return res.data;
    },
  });

  // Fetching Blog Tags data
  const {
    data: BlogTagsData,
    isLoading: BlogTagsLoading,
    error: BlogTagsError,
  } = useQuery({
    queryKey: ["BlogTags"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BlogTags`);
      return res.data;
    },
  });

  // Loading state
  if (BlogsDetailsLoading || BlogsCategoriesLoading || BlogTagsLoading) {
    return <Loader />;
  }

  // Error state
  if (BlogsDetailsError || BlogsCategoriesError || BlogTagsError) {
    return <p>Error loading data.</p>;
  }

  // Count the number of blogs in each category
  const categoryCounts = BlogsCategoriesData.map((categoryObj) => {
    const count = BlogsDetailsData.filter(
      (blog) => blog.category === categoryObj.category
    ).length;
    return { category: categoryObj.category, count };
  });

  // Extract tags from the BlogTagsData
  const tags = BlogTagsData[0]?.tags || [];

  return (
    <div>
      {/* Search Box */}
      <div className="relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg hover:text-black" />
        </div>
      </div>

      {/* Blogs */}
      <div className="pt-10">
        <p className="border-b pb-2 border-gray-400 font-bold text-2xl">
          Latest Post
        </p>
        {BlogsDetailsData.slice(0, 3).map((blog) => (
          <div key={blog.id} className="flex mt-10">
            <img
              src={blog.bannerImage || "default-image-path.jpg"}
              alt={blog.title}
              className="mr-2 w-28 rounded-2xl"
            />
            <div className="ml-5">
              <p className="text-sm font-normal pb-2">
                {blog.postedDate || "Date Missing"}
              </p>
              <p className="font-bold text-[18px]">{blog.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="pt-10">
        <p className="border-b pb-2 border-gray-400 font-bold text-2xl">
          Categories
        </p>
        <div>
          {categoryCounts.map(({ category, count }) => (
            <div key={category} className="flex font-bold justify-between pt-5">
              <p>{category}</p>
              <p>({count})</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="pt-10">
        <p className="border-b pb-2 border-gray-400 font-bold text-2xl mb-5">
          Tags
        </p>
        <div className="flex flex-wrap gap-2 w-[400px]">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-neutral bg-white border-none text-black px-5 py-4 rounded-none text-[15px]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
