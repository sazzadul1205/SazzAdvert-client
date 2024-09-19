import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";
import FAQ from "../Careers/FAQ/FAQ";
import Banner from "./Banner/Banner";
import GetInTouch from "./GetInTouch/GetInTouch";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Contact Page Banner Data
  const {
    data: ContactPageBanner,
    isLoading: ContactPageBannerIsLoading,
    error: ContactPageBannerError,
  } = useQuery({
    queryKey: ["ContactPageBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=ContactUs`);
      return res.data[0];
    },
  });

  // Fetch Get In Touch Data
  const {
    data: GetInTouchData,
    isLoading: GetInTouchDataIsLoading,
    error: GetInTouchDataError,
  } = useQuery({
    queryKey: ["GetInTouchData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/GetInTouchContact`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: GetInTouchTitleData,
    isLoading: GetInTouchTitleDataIsLoading,
    error: GetInTouchTitleDataError,
  } = useQuery({
    queryKey: ["GetInTouchTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=GetInTouch`);
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
    ContactPageBannerIsLoading ||
    GetInTouchDataIsLoading ||
    GetInTouchTitleDataIsLoading ||
    FaqDataIsLoading ||
    FaqTitleIsLoading
  ) {
    return <Loader></Loader>;
  }

  if (
    ContactPageBannerError ||
    GetInTouchDataError ||
    GetInTouchTitleDataError ||
    FaqDataError ||
    FaqTitleError
  ) {
    return <div>Error loading data.</div>;
  }
  return (
    <div>
      <Banner ContactPageBanner={ContactPageBanner}></Banner>
      <GetInTouch
        GetInTouchData={GetInTouchData}
        GetInTouchTitleData={GetInTouchTitleData}
      ></GetInTouch>
      <FAQ FaqData={FaqData} FaqTitle={FaqTitle}></FAQ>
    </div>
  );
};

export default Contact;
