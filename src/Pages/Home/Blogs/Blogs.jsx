import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = ({ BlogData, BlogsTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white text-black pb-24">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="w-[645px] mx-auto text-center pb-10">
          <p className="font-semibold text-lg">{BlogsTitleData.title}</p>
          <h1 className="font-bold text-4xl">{BlogsTitleData.description}</h1>
        </div>
        {/* All Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {BlogData.slice(0, 3).map((blog) => (
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

// Add PropTypes validation
Blogs.propTypes = {
  BlogData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      postedBy: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  BlogsTitleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blogs;
