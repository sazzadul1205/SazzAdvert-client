import PropTypes from "prop-types";
import Test1 from "../../../assets/Home/Testimonials/TestimonialContent1.png";
import Test2 from "../../../assets/Home/Testimonials/TestimonialContent2.png";
import Test3 from "../../../assets/Home/Testimonials/TestimonialContent3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = ({ TestimonialsData, TestimonialsTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white pt-24 text-black pb-24">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="flex">
          <div className="w-[700px] mr-10">
            <p className="font-semibold">{TestimonialsTitleData?.title}</p>
            <h1 className="font-bold text-4xl">
              {TestimonialsTitleData?.description}
            </h1>
            {/* Sliders */}
            <div className="mt-10">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="max-w-[800px]"
              >
                {TestimonialsData?.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="px-20">
                    <p className="bg-[#faf4f4] p-2 w-52 text-lg font-semibold rounded-full text-center pt-3 h-[55px] mb-5">
                      {testimonial.category}
                    </p>
                    <p className="mb-10 text-lg font-semibold">
                      {testimonial.testimonial}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-lg">
                          {testimonial.name}
                        </p>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Reviews */}
          <div className="bg-[#faf4f4] w-[500px] rounded-xl">
            <div className="py-28 px-20">
              <div className="flex gap-14 pb-12 border-b">
                <div>
                  <p className="font-semibold">Review On</p>
                  <img src={Test1} alt="Review 1" />
                </div>
                <div>
                  <img src={Test2} alt="Review 2" />
                  <div>7584+ Reviews</div>
                </div>
              </div>
              <div className="flex gap-14 pt-12">
                <div>
                  <p className="font-semibold">Review On</p>
                  <img src={Test3} alt="Review 3" />
                </div>
                <div>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>7584+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
Testimonials.propTypes = {
  TestimonialsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
  TestimonialsTitleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Testimonials;
