import icons from "../../../assets/Home/Blogs/icons.png";
import blog1 from "../../../assets/Home/Blogs/blog1.jpg";
import blog2 from "../../../assets/Home/Blogs/blog2.jpg";
import blog3 from "../../../assets/Home/Blogs/blog3.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// JSON data within the same file
const blogData = [
  {
    id: 1,
    postedBy: "Adli",
    title: "Demystifying Paid Search Ads: A Beginners Guide",
    categories: ["Paid Advert", "Google Search"],
    imageUrl: blog1,
  },
  {
    id: 2,
    postedBy: "Adli",
    title: "The Art of Writing Compelling Ad Copy for Paid Search",
    categories: ["Google Search", "Free Advert"],
    imageUrl: blog2,
  },
  {
    id: 3,
    postedBy: "Adli",
    title: "Targeting Techniques: Reaching the Right Audience in Paid Search",
    categories: ["Paid Advert", "Yahoo Advert"],
    imageUrl: blog3,
  },
];

const titleData = {
  title: "OUR BLOG",
  page: "Blogs",
  description: "Your path to paid search excellence starts here!",
};

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white text-black pb-24">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="w-[645px] mx-auto text-center pb-10">
          <p className="font-semibold text-lg">{titleData.title}</p>
          <h1 className="font-bold text-4xl">{titleData.description}</h1>
        </div>
        {/* All Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#faf4f4] shadow-xl transform transition-transform duration-300 hover:-translate-y-2 rounded-xl"
            >
              <div className="flex px-12 pt-10">
                <img src={icons} alt="Posted by icon" className="mr-4" />
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
