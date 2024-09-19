import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const LargeTestimonials = ({
  LargeTestimonialsData,
  LargeTestimonialsTitleData,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white pt-24 pb-24 text-black">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="text-center w-[600px] mx-auto">
          <p className="font-semibold">{LargeTestimonialsTitleData.title}</p>
          <h1 className="font-bold text-4xl">
            {LargeTestimonialsTitleData.description}
          </h1>
        </div>

        <div className="mt-10">
          <Swiper navigation={true} modules={[Navigation]}>
            {LargeTestimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial._id} className="px-10">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`Image of ${testimonial.name}`}
                      className="mr-12"
                    />
                    <img
                      src={"https://i.ibb.co/7zjPQ0m/Icon.png"}
                      alt="Decorative icon"
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

// PropTypes for LargeTestimonials component
LargeTestimonials.propTypes = {
  LargeTestimonialsData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
  LargeTestimonialsTitleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default LargeTestimonials;
