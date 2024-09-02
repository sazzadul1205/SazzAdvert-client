import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  // API fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: BigTestimonials,
    isLoading: BigTestimonialsLoading,
    error: BigTestimonialsError,
  } = useQuery({
    queryKey: ["BigTestimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BigTestimonials`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: TestimonialsTitleData,
    isLoading: titleDataLoading,
    error: titleDataError,
  } = useQuery({
    queryKey: ["TestimonialsTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Testimonials`);
      return res.data[0];
    },
  });

  if (BigTestimonialsLoading || titleDataLoading) {
    return <Loader />;
  }

  if (BigTestimonialsError || titleDataError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-10 text-black">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="text-center w-[600px] mx-auto">
          <p className="font-semibold text-lg">{TestimonialsTitleData.title}</p>
          <h1 className="font-bold text-4xl">
            {TestimonialsTitleData.description}
          </h1>
        </div>

        <div className="mt-10">
          <Swiper navigation={true} modules={[Navigation]}>
            {BigTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="px-10">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mr-12"
                    />
                    <img
                      src={"https://i.ibb.co/7zjPQ0m/Icon.png"}
                      alt="Icon"
                      className="absolute top-5 right-14 p-2"
                    />
                  </div>
                  <div className="w-[650px] text-lg font-semibold">
                    <p className="mb-10 text-[#4C4C4C] font-semibold">
                      {testimonial.content}
                    </p>
                    <div>
                      <p className="text-[28px]">{testimonial.name}</p>
                      <p className="font-normal mt-2">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
