import  { useState } from "react";
import icons from "../../../assets/Home/Blogs/icons.png";
import blog1 from "../../../assets/Home/Blogs/blog1.jpg";
import blog2 from "../../../assets/Home/Blogs/blog2.jpg";
import blog3 from "../../../assets/Home/Blogs/blog3.jpg";

// Simulating more data (total 20 entries)
const blogData = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    postedBy: "Adli",
    title: `Blog Title ${index + 1}`,
    categories: ["Category1", "Category2"],
    imageUrl: [blog1, blog2, blog3][index % 3],
  }));

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Slice the data to show only the current page items
  const currentData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#FFE6E6] py-20 text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* All Cards */}
        <div className="grid grid-cols-3 gap-5">
          {currentData.map((blog) => (
            <div
              key={blog.id}
              className="card bg-[#faf4f4] w-96 shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex px-12 pt-10">
                <img src={icons} alt="" className="mr-4" />
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
                      className="bg-[#FFEEEE] hover:bg-red-500 p-4 rounded-full"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
