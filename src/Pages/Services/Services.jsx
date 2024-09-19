import { useQuery } from "@tanstack/react-query";
import Brands from "../Shared/Brands/Brands";
import Testimonials from "../Shared/Testimonials/Testimonials";
import Capabilities from "./Capabilities/Capabilities";
import FirstBanner from "./FirstBanner/FirstBanner";
import SecondBanner from "./SecondBanner/SecondBanner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader";

const Services = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Services Page Banner Data
  const {
    data: ServicesPageBanner1,
    isLoading: ServicesPageBanner1IsLoading,
    error: ServicesPageBanner1Error,
  } = useQuery({
    queryKey: ["BannerOurServices"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurServices`);
      return res.data[0];
    },
  });

  // Fetch Capabilities Data
  // Data
  const {
    data: CapabilitiesData,
    isLoading: CapabilitiesDataIsLoading,
    error: CapabilitiesDataError,
  } = useQuery({
    queryKey: ["CapabilitiesData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Capabilities`);
      return res.data;
    },
  });

  //Title
  const {
    data: CapabilitiesTitle,
    isLoading: CapabilitiesTitleIsLoading,
    error: CapabilitiesTitleError,
  } = useQuery({
    queryKey: ["CapabilitiesTitle"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Capabilities`);
      return res.data[0];
    },
  });

  // Fetch Services Page Banner 2 Data
  const {
    data: ServicesPageBanner2,
    isLoading: ServicesPageBanner2IsLoading,
    error: ServicesPageBanner2Error,
  } = useQuery({
    queryKey: ["ServicesPageBanner2"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurExperts`);
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
    ServicesPageBanner1IsLoading ||
    CapabilitiesDataIsLoading ||
    CapabilitiesTitleIsLoading ||
    ServicesPageBanner2IsLoading ||
    TestimonialsIsLoading ||
    TestimonialsTitleDataIsLoading ||
    BrandsIsLoading
  ) {
    return <Loader></Loader>;
  }

  if (
    ServicesPageBanner1Error ||
    CapabilitiesDataError ||
    CapabilitiesTitleError ||
    ServicesPageBanner2Error ||
    TestimonialsError ||
    TestimonialsTitleDataError ||
    BrandsError
  ) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <FirstBanner ServicesPageBanner1={ServicesPageBanner1}></FirstBanner>
      <Capabilities
        CapabilitiesData={CapabilitiesData}
        CapabilitiesTitle={CapabilitiesTitle}
      ></Capabilities>
      <SecondBanner ServicesPageBanner2={ServicesPageBanner2}></SecondBanner>
      <Brands BrandsData={BrandsData}></Brands>
      <Testimonials
        TestimonialsData={TestimonialsData}
        TestimonialsTitleData={TestimonialsTitleData}
      ></Testimonials>
    </div>
  );
};

export default Services;
