import RightSide from "./RightSide/RightSide";
import BlogContent from "./BlogContent/BlogContent";

const BlogDetails = () => {
  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6]">
      <div className="max-w-[1200px] mx-auto text-black">
        <div className="flex py-20 pt-40 gap-10">
          <div className="w-[1100px]">
            <BlogContent></BlogContent>
          </div>
          <div className="">
            <RightSide></RightSide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
