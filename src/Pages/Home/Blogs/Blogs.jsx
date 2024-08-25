import icons from "../../../assets/Home/Blogs/icons.png";
import blog1 from "../../../assets/Home/Blogs/blog1.jpg";
import blog2 from "../../../assets/Home/Blogs/blog2.jpg";
import blog3 from "../../../assets/Home/Blogs/blog3.jpg";

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
    categories: ["Category1", "Category2"],
    imageUrl: blog2,
  },
  {
    id: 3,
    postedBy: "Adli",
    title: "Targeting Techniques: Reaching the Right Audience in Paid Search",
    categories: ["Category1", "Category2"],
    imageUrl: blog3,
  },
];

const Blogs = () => {
  return (
    <div className="bg-white text-black pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-[645px] mx-auto text-center pb-10">
          <p className="font-semibold text-lg">OUR BLOG</p>
          <h1 className="font-bold text-4xl">
            Your path to paid search excellence starts here!
          </h1>
        </div>
        {/* All Cards */}
        <div className="grid grid-cols-3 gap-5">
          {blogData.map((blog) => (
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
                      className="bg-[#FFEEEE] p-4 rounded-full"
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
