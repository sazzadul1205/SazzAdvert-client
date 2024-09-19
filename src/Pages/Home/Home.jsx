import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Brands from "../Shared/Brands/Brands";
import ProjectArea from "../Shared/ProjectArea/ProjectArea";
import Testimonials from "../Shared/Testimonials/Testimonials";
import Audit from "./Audit/Audit";
import Blogs from "./Blogs/Blogs";
import Capabilities from "./Capabilities/Capabilities";
import HomeFirstBanner from "./HomeFirstBanner/HomeFirstBanner";
import OurProcess from "./OurProcess/OurProcess";
import Plaques from "./Plaques/Plaques";
import SuccessStories from "./SuccessStories/SuccessStories";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Loader from "../../Components/Loader";
import Awards from "../Shared/Awards/Awards";

const Home = () => {
  // Axios instance
  const axiosPublic = useAxiosPublic();

  // Fetching BannerHome data
  const {
    data: BannerHome,
    isLoading: BannerHomeIsLoading,
    error: BannerHomeError,
  } = useQuery({
    queryKey: ["BannerHome"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Home`);
      return res.data;
    },
  });

  // Fetching plaques data
  const {
    data: plaquesData,
    isLoading: PlaqueDataIsLoading,
    error: PlaqueDataError,
  } = useQuery({
    queryKey: ["Plaques"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Plaques`);
      return res.data[0];
    },
  });

  // Fetching plaques data
  // Data
  const {
    data: WhatWeDoData,
    isLoading: whatWeDoIsLoading,
    error: whatWeDoError,
  } = useQuery({
    queryKey: ["whatWeDo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/whatWeDo`);
      return res.data;
    },
  });
  // Title
  const {
    data: WhatWeDoTitleData,
    isLoading: WhatWeDoTitleDataIsLoading,
    error: WhatWeDoTitleDataError,
  } = useQuery({
    queryKey: ["titleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=WhatWeDo`);
      return res.data;
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

  // Fetching OurProcess Data
  // Data
  const {
    data: OurProcessStepsData,
    isLoading: OurProcessIsLoading,
    error: OurProcessError,
  } = useQuery({
    queryKey: ["OurProcessSteps"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurProcess`);
      return res.data;
    },
  });
  // Title
  const {
    data: OurProcessTitleData,
    isLoading: OurProcessTitleDataIsLoading,
    error: OurProcessTitleDataError,
  } = useQuery({
    queryKey: ["OurProcessTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurProcess`);
      return res.data;
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

  // Fetch Success Stories Data
  // Data
  const {
    data: SuccessStoriesData,
    isLoading: SuccessStoriesIsLoading,
    error: SuccessStoriesError,
  } = useQuery({
    queryKey: ["successStoriesData"],
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

  // Fetch Blogs Data
  // Data
  const {
    data: BlogData,
    isLoading: BlogDataIsLoading,
    error: BlogDataError,
  } = useQuery({
    queryKey: ["blogData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Blogs`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: BlogsTitleData,
    isLoading: BlogsTitleDataIsLoading,
    error: BlogsTitleDataError,
  } = useQuery({
    queryKey: ["BlogsTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Blogs`);
      return res.data[0];
    },
  });

  // Show Loader while data is being fetched
  if (
    BannerHomeIsLoading ||
    PlaqueDataIsLoading ||
    whatWeDoIsLoading ||
    WhatWeDoTitleDataIsLoading ||
    projectAreaIsLoading ||
    CapabilitiesCardsIsLoading ||
    CapabilitiesTitleDataIsLoading ||
    OurProcessIsLoading ||
    OurProcessTitleDataIsLoading ||
    AwardHomeIsLoading ||
    SuccessStoriesIsLoading ||
    SuccessStoriesTitleDataIsLoading ||
    BrandsIsLoading ||
    TestimonialsIsLoading ||
    TestimonialsTitleDataIsLoading ||
    BlogDataIsLoading ||
    BlogsTitleDataIsLoading
  ) {
    return <Loader />;
  }

  if (
    BannerHomeError ||
    PlaqueDataError ||
    whatWeDoError ||
    WhatWeDoTitleDataError ||
    projectAreaError ||
    CapabilitiesCardsError ||
    CapabilitiesTitleDataError ||
    OurProcessError ||
    OurProcessTitleDataError ||
    AwardHomeError ||
    SuccessStoriesError ||
    SuccessStoriesTitleDataError ||
    BrandsError ||
    TestimonialsError ||
    TestimonialsTitleDataError ||
    BlogDataError ||
    BlogsTitleDataError
  ) {
    return (
      <div className="bg-white flex justify-center items-center ">
        <div className="max-w-[1200px] mx-auto h-screen mt-96">
          <p>Error While loading Data</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HomeFirstBanner BannerHome={BannerHome}></HomeFirstBanner>
      <Plaques plaquesData={plaquesData}></Plaques>
      <WhatWeDo
        WhatWeDoData={WhatWeDoData}
        WhatWeDoTitleData={WhatWeDoTitleData}
      ></WhatWeDo>
      <ProjectArea projectAreaData={projectAreaData}></ProjectArea>
      <Capabilities
        CapabilitiesCards={CapabilitiesCards}
        CapabilitiesTitleData={CapabilitiesTitleData}
      ></Capabilities>
      <OurProcess
        OurProcessStepsData={OurProcessStepsData}
        OurProcessTitleData={OurProcessTitleData}
      ></OurProcess>
      <Awards
        AwardData={AwardHome}
        backgroundColor='#FFFFFF' // Pass the background color here
      ></Awards>
      <SuccessStories
        SuccessStoriesData={SuccessStoriesData}
        SuccessStoriesTitleData={SuccessStoriesTitleData}
      ></SuccessStories>
      <Brands BrandsData={BrandsData}></Brands>
      <Testimonials
        TestimonialsData={TestimonialsData}
        TestimonialsTitleData={TestimonialsTitleData}
      ></Testimonials>
      <Audit></Audit>
      <Blogs BlogData={BlogData} BlogsTitleData={BlogsTitleData}></Blogs>
    </div>
  );
};

export default Home;
