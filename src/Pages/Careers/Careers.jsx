import CareerFirstBanner from "../Careers/CareerFirstBanner/CareerFirstBanner";
import GetInTouch from "../Careers/GetInTouch/GetInTouch";
import CareerSecondBanner from "../Careers/CareerSecondBanner/CareerSecondBanner";
import FAQ from "../Careers/FAQ/FAQ";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";

const Careers = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Careers Page Banner 1 Data
  const {
    data: CareersPageBanner1,
    isLoading: CareersPageBanner1IsLoading,
    error: CareersPageBanner1Error,
  } = useQuery({
    queryKey: ["CareersPageBanner1"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Careers1`);
      return res.data[0];
    },
  });

  // Fetch Get In Touch Data
  // Data
  const {
    data: GetInTouchData,
    isLoading: GetInTouchDataIsLoading,
    error: GetInTouchDataError,
  } = useQuery({
    queryKey: ["GetInTouchData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/GetInTouch`);
      return res.data;
    },
  });

  //  Title
  const {
    data: GetInTouchTitleData,
    isLoading: GetInTouchTitleIsLoading,
    error: GetInTouchTitleError,
  } = useQuery({
    queryKey: ["GetInTouchTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=GetInTouch`);
      return res.data[0];
    },
  });

  // Fetch Careers Page Banner 2 Data
  const {
    data: CareersPageBanner2,
    isLoading: CareersPageBanner2IsLoading,
    error: CareersPageBanner2Error,
  } = useQuery({
    queryKey: ["CareersPageBanner2"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurExperts`);
      return res.data[0];
    },
  });

  // Fetch FAQ Data
  // Data
  const {
    data: FaqData,
    isLoading: FaqDataIsLoading,
    error: FaqDataError,
  } = useQuery({
    queryKey: ["FAQ"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/FAQ`);
      return res.data;
    },
  });
  // title
  const {
    data: FaqTitle,
    isLoading: FaqTitleIsLoading,
    error: FaqTitleError,
  } = useQuery({
    queryKey: ["FAQDTitle"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=FAQS`);
      return res.data[0];
    },
  });

  if (
    CareersPageBanner1IsLoading ||
    GetInTouchDataIsLoading ||
    GetInTouchTitleIsLoading ||
    CareersPageBanner2IsLoading ||
    FaqDataIsLoading ||
    FaqTitleIsLoading
  ) {
    return <Loader></Loader>;
  }

  if (
    CareersPageBanner1Error ||
    GetInTouchDataError ||
    GetInTouchTitleError ||
    CareersPageBanner2Error ||
    FaqDataError ||
    FaqTitleError
  ) {
    return <div>Error loading data.</div>;
  }
  return (
    <div>
      <CareerFirstBanner
        CareersPageBanner1={CareersPageBanner1}
      ></CareerFirstBanner>
      <GetInTouch
        GetInTouchData={GetInTouchData}
        GetInTouchTitleData={GetInTouchTitleData}
      ></GetInTouch>
      <CareerSecondBanner
        CareersPageBanner2={CareersPageBanner2}
      ></CareerSecondBanner>
      <FAQ FaqData={FaqData} FaqTitle={FaqTitle}></FAQ>
    </div>
  );
};

export default Careers;
