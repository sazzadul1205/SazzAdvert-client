import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Brands from "../Shared/Brands/Brands";
import Banner from "./Banner/Banner";
import JoinTeam from "./JoinTeam/JoinTeam";
import OurTeamContent from "./OurTeamContent/OurTeamContent";
import Loader from "../../Components/Loader";
import Awards from "../Shared/Awards/Awards";
import LargeTestimonials from "../SuccessStoriesPage/LargeTestimonials/LargeTestimonials";

const OurTeam = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Our Team Page Banner Data
  const {
    data: OurTeamPageBanner,
    isLoading: OurTeamPageBannerIsLoading,
    error: OurTeamPageBannerError,
  } = useQuery({
    queryKey: ["OurTeamPageBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurExperts2`);
      return res.data[0];
    },
  });

  // Fetch Awards Data
  const {
    data: AwardHome,
    isLoading: AwardHomeIsLoading,
    error: AwardHomeError,
  } = useQuery({
    queryKey: ["AwardsHome"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/AwardsComponent?Number=1`);
      return res.data[0];
    },
  });

  // Fetch Our Team Content Data
  // Data
  const {
    data: OurTeamContentData,
    isLoading: OurTeamContentDataIsLoading,
    error: OurTeamContentDataError,
  } = useQuery({
    queryKey: ["OurTeamContentData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurTeam`);
      return res.data;
    },
  });
  // Title
  const {
    data: OurTeamContentTitleData,
    isLoading: OurTeamContentTitleDataIsLoading,
    error: OurTeamContentTitleDataError,
  } = useQuery({
    queryKey: ["OurTeamContentTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurTeam`);
      return res.data[0];
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

  // Fetch Join Team Data
  const {
    data: JoinTeamData,
    isLoading: JoinTeamDataIsLoading,
    error: JoinTeamDataError,
  } = useQuery({
    queryKey: ["JoinTeamData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=JoinTeam`);
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

  if (
    OurTeamPageBannerIsLoading ||
    AwardHomeIsLoading ||
    OurTeamContentDataIsLoading ||
    OurTeamContentTitleDataIsLoading ||
    LargeTestimonialsDataIsLoading ||
    LargeTestimonialsTitleDataIsLoading ||
    JoinTeamDataIsLoading ||
    BrandsIsLoading
  ) {
    return <Loader></Loader>;
  }
  if (
    OurTeamPageBannerError ||
    AwardHomeError ||
    OurTeamContentDataError ||
    OurTeamContentTitleDataError ||
    LargeTestimonialsDataError ||
    LargeTestimonialsTitleDataError ||
    JoinTeamDataError ||
    BrandsError
  ) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <Banner OurTeamPageBanner={OurTeamPageBanner}></Banner>
      <Awards
        AwardData={AwardHome}
        backgroundColor="#FFFFFF" // Pass the background color here
      ></Awards>
      <OurTeamContent
        OurTeamContentData={OurTeamContentData}
        OurTeamContentTitleData={OurTeamContentTitleData}
      ></OurTeamContent>
      <LargeTestimonials
        LargeTestimonialsData={LargeTestimonialsData}
        LargeTestimonialsTitleData={LargeTestimonialsTitleData}
      ></LargeTestimonials>
      <JoinTeam JoinTeamData={JoinTeamData}></JoinTeam>
      <Brands BrandsData={BrandsData}></Brands>
    </div>
  );
};

export default OurTeam;
