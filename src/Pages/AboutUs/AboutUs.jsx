import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Capabilities from "../Home/Capabilities/Capabilities";
import Brands from "../Shared/Brands/Brands";
import ProjectArea from "../Shared/ProjectArea/ProjectArea";
import Testimonials from "../Shared/Testimonials/Testimonials";
import FirstBanner from "./FirstBanner/FirstBanner";

const AboutUs = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch About Us Page Banner Data
  const {
    data: AboutUsPageBanner,
    isLoading: AboutUsPageBannerIsLoading,
    isError: AboutUsPageBannerError,
  } = useQuery({
    queryKey: ["AboutUsPageBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=AboutUs`);
      return res.data[0];
    },
  });

  // Fetching projectArea Data
  const {
    data: projectAreaData,
    isLoading: projectAreaIsLoading,
    error: projectAreaError,
  } = useQuery({
    queryKey: ["ProjectAreaComponent"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/ProjectAreaComponent`);
      return res.data[0];
    },
  });

  // Fetching Capabilities Data
  // Card
  const {
    data: CapabilitiesCards,
    isLoading: CapabilitiesCardsIsLoading,
    error: CapabilitiesCardsError,
  } = useQuery({
    queryKey: ["CapabilitiesCards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Capabilities`);
      return res.data;
    },
  });
  //Title
  const {
    data: CapabilitiesTitleData,
    isLoading: CapabilitiesTitleDataIsLoading,
    error: CapabilitiesTitleDataError,
  } = useQuery({
    queryKey: ["CapabilitiesTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Capabilities`);
      return res.data;
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
    AboutUsPageBannerIsLoading ||
    CapabilitiesCardsIsLoading ||
    CapabilitiesTitleDataIsLoading ||
    projectAreaIsLoading ||
    BrandsIsLoading ||
    TestimonialsIsLoading ||
    TestimonialsTitleDataIsLoading
  ) {
    return <Loader />;
  }

  if (
    AboutUsPageBannerError ||
    CapabilitiesCardsError ||
    CapabilitiesTitleDataError ||
    projectAreaError ||
    BrandsError ||
    TestimonialsError ||
    TestimonialsTitleDataError
  ) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <FirstBanner AboutUsPageBanner={AboutUsPageBanner} />
      <ProjectArea projectAreaData={projectAreaData}></ProjectArea>
      <Capabilities
        CapabilitiesCards={CapabilitiesCards}
        CapabilitiesTitleData={CapabilitiesTitleData}
      ></Capabilities>
      <Brands BrandsData={BrandsData} />
      <Testimonials
        TestimonialsData={TestimonialsData} 
        TestimonialsTitleData={TestimonialsTitleData}
        />
    </div>
  );
};

export default AboutUs;
