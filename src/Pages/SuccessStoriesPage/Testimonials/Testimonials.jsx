import Test1 from "../../../assets/SuccessStories/Testimonials/Test1.png";
import Test2 from "../../../assets/SuccessStories/Testimonials/Test2.png";
import icon from "../../../assets/SuccessStories/Testimonials/icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Dummy data for testimonials
const testimonialsData = [
  {
    id: 1,
    image: Test1,
    content:
      "Their expertise and dedication have truly transformed our brand's online presence. From the initial consultation to the execution of our campaigns, they displayed an exceptional level of professionalism and creativity. They took the time to understand our brand's unique voice and target audience, resulting in campaigns that resonated deeply with our customers.",
    name: "Anne Mari",
    position: "CTO at HiBootstrap",
  },
  {
    id: 2,
    image: Test2,
    content:
      "Their expertise and dedication have truly transformed our brand's online presence. From the initial consultation to the execution of our campaigns, they displayed an exceptional level of professionalism and creativity. They took the time to understand our brand's unique voice and target audience, resulting in campaigns that resonated deeply with our customers.",
    name: "Jasika Maya",
    position: "CTO at HiBootstrap",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white pt-24 pb-24 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center w-[600px] mx-auto">
          <p className="font-semibold">TESTIMONIALS</p>
          <h1 className="font-bold text-4xl">
            We help to achieve customers business goals
          </h1>
        </div>

        <div className="mt-10">
          <Swiper navigation={true} modules={[Navigation]}>
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="px-10">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mr-12"
                    />
                    <img
                      src={icon}
                      alt="icon"
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
