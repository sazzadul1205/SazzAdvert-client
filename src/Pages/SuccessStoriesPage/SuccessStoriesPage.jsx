import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Brands from "../Shared/Brands/Brands";
import FirstBanner from "./FirstBanner/FirstBanner";
import OurProcess from "./OurProcess/OurProcess";
import SuccessStories from "./SuccessStories/SuccessStories";
import LargeTestimonials from "./LargeTestimonials/LargeTestimonials";
import Loader from "../../Components/Loader";

const SuccessStoriesPage = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Success Stories Page Banner Data
  const {
    data: SuccessStoriesPageBanner,
    isLoading: SuccessStoriesPageBannerIsLoading,
    error: SuccessStoriesPageBannerError,
  } = useQuery({
    queryKey: ["SuccessStoriesPageBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurAchievements`);
      return res.data[0];
    },
  });

  // Fetch Our process Data
  // Data
  const {
    data: OurProcessData,
    isLoading: OurProcessDataIsLoading,
    error: OurProcessDataError,
  } = useQuery({
    queryKey: ["OurProcessData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurProcess`);
      return res.data;
    },
  });
  //Title
  const {
    data: OurProcessTitleData,
    isLoading: OurProcessTitleIsLoading,
    error: OurProcessTitleError,
  } = useQuery({
    queryKey: ["OurProcessTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurProcess`);
      return res.data[0];
    },
  });

  //  Fetch Success Stories Data
  // Data
  const {
    data: SuccessStoriesData,
    isLoading: SuccessStoriesDataIsLoading,
    error: SuccessStoriesDataError,
  } = useQuery({
    queryKey: ["SuccessStoriesData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/SuccessStories`);
      return res.data;
    },
  });
  // Title
  const {
    data: SuccessStoriesTitleData,
    isLoading: SuccessStoriesTitleDataIsLoading,
    error: SuccessStoriesTitleDataError,
  } = useQuery({
    queryKey: ["SuccessStoriesTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=SuccessStories`);
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

  // Fetch Large Testimonials Data
  // Data
  const {
    data: LargeTestimonialsData,
    isLoading: LargeTestimonialsDataIsLoading,
    error: LargeTestimonialsDataError,
  } = useQuery({
    queryKey: ["LargeTestimonialsData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BigTestimonials`);
      return res.data;
    },
  });
  //Title
  const {
    data: LargeTestimonialsTitleData,
    isLoading: LargeTestimonialsTitleDataIsLoading,
    error: LargeTestimonialsTitleDataError,
  } = useQuery({
    queryKey: ["TestimonialsTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Testimonials`);
      return res.data[0];
    },
  });

  if (
    SuccessStoriesPageBannerIsLoading ||
    OurProcessDataIsLoading ||
    OurProcessTitleIsLoading ||
    SuccessStoriesDataIsLoading ||
    SuccessStoriesTitleDataIsLoading ||
    BrandsIsLoading ||
    LargeTestimonialsDataIsLoading ||
    LargeTestimonialsTitleDataIsLoading
  ) {
    return <Loader />;
  }

  if (
    SuccessStoriesPageBannerError ||
    OurProcessDataError ||
    OurProcessTitleError ||
    SuccessStoriesDataError ||
    SuccessStoriesTitleDataError ||
    BrandsError ||
    LargeTestimonialsDataError ||
    LargeTestimonialsTitleDataError
  ) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <FirstBanner
        SuccessStoriesPageBanner={SuccessStoriesPageBanner}
      ></FirstBanner>
      <OurProcess
        OurProcessData={OurProcessData}
        OurProcessTitleData={OurProcessTitleData}
      ></OurProcess>
      <SuccessStories
        SuccessStoriesData={SuccessStoriesData}
        SuccessStoriesTitleData={SuccessStoriesTitleData}
      ></SuccessStories>
      <Brands BrandsData={BrandsData}></Brands>
      <LargeTestimonials
        LargeTestimonialsData={LargeTestimonialsData}
        LargeTestimonialsTitleData={LargeTestimonialsTitleData}
      ></LargeTestimonials>
    </div>
  );
};

export default SuccessStoriesPage;
