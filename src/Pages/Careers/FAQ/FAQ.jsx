import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useQuery } from "@tanstack/react-query";

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const axiosPublic = useAxiosPublic();

  // Fetch title data
  const {
    data: FAQDTitle,
    isLoading: titleLoading,
    error: titleError,
  } = useQuery({
    queryKey: ["FAQDTitle"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=FAQS`);
      return res.data[0];
    },
  });

  // Fetch FAQ listings
  const {
    data: FAQ,
    isLoading: FAQLoading,
    error: FAQError,
  } = useQuery({
    queryKey: ["FAQ"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/FAQ`);
      return res.data;
    },
  });

  if (titleLoading || FAQLoading) {
    return <Loader />;
  }

  if (titleError || FAQError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="text-center justify-center mx-auto text-black pb-10">
          <p className="text-[17px] font-semibold">{FAQDTitle?.title}</p>
          <h1 className="text-[36px] w-full max-w-[648px] font-semibold mx-auto">
            {FAQDTitle?.description}
          </h1>
        </div>

        {/* Accordion */}
        <div>
          {FAQ.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-[#faf4f4] text-black mb-5 w-[810px] mx-auto"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="pr-5 ">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
