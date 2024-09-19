import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";
import Brands from "../Shared/Brands/Brands";
import Testimonials from "../Shared/Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Marketing from "./Marketing/Marketing";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Awards from "./Awards/Awards";

const ServiceDetails = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Services Details Banner Data
  const {
    data: ServiceDetailsBanner,
    isLoading: ServiceDetailsBannerIsLoader,
    isError: ServiceDetailsBannerError,
  } = useQuery({
    queryKey: ["ServiceDetailsBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=AwardWiningAgency`);
      return res.data[0];
    },
  });

  // Fetch Market Data
  // Data
  const {
    data: MarketChaptersData,
    isLoading: MarketChaptersDataIsLoading,
    error: MarketChaptersDataError,
  } = useQuery({
    queryKey: ["MarketChaptersData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/MarketChapters`);
      return res.data;
    },
  });

  // Sidebar
  const {
    data: MarketSidebarData,
    isLoading: MarketSidebarDataIsLoading,
    error: MarketSidebarDataError,
  } = useQuery({
    queryKey: ["MarketSidebarData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/MarketSidebar`);
      return res.data;
    },
  });

  // Fetch Banner
  const {
    data: MarketBanner,
    isLoading: MarketBannerIsLoading,
    error: MarketBannerError,
  } = useQuery({
    queryKey: ["MarketBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Market`);
      return res.data[0];
    },
  });

  // Fetch Services Details Award Data
  const {
    data: ServiceDetailsAwardData,
    isLoading: ServiceDetailsAwardDataIsLoading,
    error: ServiceDetailsAwardDataError,
  } = useQuery({
    queryKey: ["ServiceDetailsAwardData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/AwardsComponent?Number=2`);
      return res.data[0];
    },
  });

  // Fetch Brands Data
  const {
    data: BrandsData,
    isLoading: BrandsIsLoading,
    error: BrandsError,
  } = useQuery({
    queryKey: ["Brands"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Brands`);
      return res.data;
    },
  });

  // Fetch Testimonials Data
  // Data
  const {
    data: TestimonialsData,
    isLoading: TestimonialsIsLoading,
    error: TestimonialsError,
  } = useQuery({
    queryKey: ["TestimonialsSlides"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TestimonialSlides`);
      return res.data;
    },
  });
  // Title
  const {
    data: TestimonialsTitleData,
    isLoading: TestimonialsTitleDataIsLoading,
    error: TestimonialsTitleDataError,
  } = useQuery({
    queryKey: ["TestimonialsTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Testimonials`);
      return res.data[0];
    },
  });

  if (
    ServiceDetailsBannerIsLoader ||
    MarketChaptersDataIsLoading ||
    MarketSidebarDataIsLoading ||
    MarketBannerIsLoading ||
    ServiceDetailsAwardDataIsLoading ||
    BrandsIsLoading ||
    TestimonialsIsLoading ||
    TestimonialsTitleDataIsLoading
  ) {
    return <Loader></Loader>;
  }

  if (
    ServiceDetailsBannerError ||
    MarketChaptersDataError ||
    MarketSidebarDataError ||
    MarketBannerError ||
    ServiceDetailsAwardDataError ||
    BrandsError ||
    TestimonialsError ||
    TestimonialsTitleDataError
  ) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <Banner ServiceDetailsBanner={ServiceDetailsBanner}></Banner>
      <Marketing
        MarketChaptersData={MarketChaptersData}
        MarketSidebarData={MarketSidebarData}
        MarketBanner={MarketBanner}
      ></Marketing>
      <Awards
        AwardData={ServiceDetailsAwardData}
        backgroundColor="#EF4335" // Pass the background color here
      ></Awards>

      <Brands BrandsData={BrandsData}></Brands>
      <Testimonials
        TestimonialsData={TestimonialsData}
        TestimonialsTitleData={TestimonialsTitleData}
      ></Testimonials>
    </div>
  );
};

export default ServiceDetails;
