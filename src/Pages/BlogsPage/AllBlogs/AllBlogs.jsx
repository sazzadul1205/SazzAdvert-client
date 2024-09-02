import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const AllBlogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // API fetch for Blogs Data
  const axiosPublic = useAxiosPublic();
  const {
    data: blogsData = [],
    isLoading: blogsLoading,
    error: blogsError,
  } = useQuery({
    queryKey: ["Blogs", currentPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/Blogs?page=${currentPage}&size=${blogsPerPage}`
      );
      return res.data;
    },
  });

  const { data: totalBlogsCount = [], isLoading: isLoadingProductsCount } =
    useQuery({
      queryKey: ["BlogsCount"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/BlogsCount`);
        return res.data || 0;
      },
    });

  // Calculate the number of pages and ensure it's at least 1
  const numberOfPages = Math.ceil(totalBlogsCount.count / blogsPerPage);
  const pages = Array.from(
    { length: Math.max(0, numberOfPages) },
    (_, index) => index
  );
  console.log(numberOfPages);

  if (blogsLoading || isLoadingProductsCount) {
    return <Loader></Loader>;
  }

  if (blogsError) {
    return <div>Error loading data</div>;
  }
  console.log(blogsData);
  console.log(totalBlogsCount);

  return (
    <div className="bg-[#FFE6E6] pt-10 text-black">
      <div className="max-w-[1200px] mx-auto pb-5">
        {/* All Cards */}
        <div className="grid grid-cols-3 gap-5" data-aos="fade-up">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="card bg-[#faf4f4] w-96 py-3 shadow-xl transform transition-transform duration-300 hover:-translate-y-4"
            >
              <div className="flex px-12 pt-10">
                <img
                  src={"https://i.imgur.com/K7JSBpc.png"}
                  alt={"https://i.imgur.com/K7JSBpc.png"}
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
                  className="rounded-xl w-[335px] h-[210px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[22px] font-semibold">
                  {blog.title}
                </h2>
                <div className="card-actions pt-4">
                  {blog.categories.map((category, index) => (
                    <button
                      key={index}
                      className="bg-[#FFEEEE] hover:bg-red-500 hover:text-white p-4 rounded-full"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Page changing */}
        <div className="join my-5 flex justify-center ">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="join-item btn bg-pink-500 hover:bg-pink-700 text-white border-none text-lg"
            disabled={currentPage === 1}
          >
            «
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page + 1)}
              key={page}
              className={`join-item btn bg-pink-200-200 text-white border-none text-lg ${
                currentPage === page + 1 && "bg-pink-500 border border-black"
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, numberOfPages))
            }
            className="join-item btn bg-pink-500 hover:bg-pink-700 text-white border-none text-lg"
            disabled={currentPage === numberOfPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
