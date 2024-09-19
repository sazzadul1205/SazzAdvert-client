import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllBlogs from "./AllBlogs/AllBlogs";
import Banner from "./Banner/Banner";
import Loader from "../../Components/Loader";

const BlogsPage = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Blogs Page Banner Data
  const {
    data: BlogsPageBanner,
    isLoading: BlogsPageBannerIsLoading,
    error: BlogsPageBannerError,
  } = useQuery({
    queryKey: ["BlogsPageBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=BlogsPage`);
      return res.data[0];
    },
  });
  

  if (BlogsPageBannerIsLoading) {
    return <Loader></Loader>;
  }

  if (BlogsPageBannerError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <Banner BlogsPageBanner={BlogsPageBanner}></Banner>
      <AllBlogs></AllBlogs>
    </div>
  );
};

export default BlogsPage;
