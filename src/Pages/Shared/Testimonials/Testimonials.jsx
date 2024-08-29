import Test3 from "../../../assets/Home/Testimonials/Test3.png";
import Test2 from "../../../assets/Home/Testimonials/Test2.png";
import Test1 from "../../../assets/Home/Testimonials/Test1.png";

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

// JSON data within the same file
const testimonialsData = [
  {
    id: 1,
    category: "Theme Quality",
    testimonial:
      "“We have been partnering with Adli for our paid search advertising needs, and they have consistently exceeded our expectations.”",
    name: "Alex Dew",
    position: "CTO at HiBootstrap",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  },
  {
    id: 2,
    category: "Customer Support",
    testimonial:
      "“The customer support provided by Adli is top-notch. They are always available to help us with any queries or issues.”",
    name: "Jane Doe",
    position: "CEO at Bolster",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1502980426475-8d4e86a19d5a.webp",
  },
  {
    id: 3,
    category: "Performance",
    testimonial:
      "“Adli’s performance-driven strategies have significantly boosted our online presence and revenue.”",
    name: "John Smith",
    position: "Marketing Head at Shoponix",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1418479631014-8cbf89db3431.webp",
  },
  {
    id: 4,
    category: "Reliability",
    testimonial:
      "“The team at Adli is reliable and always delivers on their promises. Our experience with them has been nothing but positive.”",
    name: "Emily White",
    position: "Founder at Flexio",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1517841905240-472988babdf9.webp",
  },
  // Add more testimonials as needed
];

const titleData = {
  title: "TESTIMONIALS",
  page: "Testimonials",
  description: "We help to achieve customers' business goals",
};

const Testimonials = () => {
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
            <p className="font-semibold">{titleData.title}</p>
            <h1 className="font-bold text-4xl">{titleData.description}</h1>
            {/* Sliders */}
            <div className="mt-10">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="max-w-[800px]"
              >
                {testimonialsData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="px-10">
                    <p className="bg-[#faf4f4] p-2 w-40 text-lg font-semibold rounded-full text-center pt-3 h-[55px] mb-5">
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
          <div className="bg-[#faf4f4] flex-1 rounded-xl">
            <div className="py-28 px-20">
              <div className="flex gap-14 pb-12 border-b">
                <div>
                  <p className="font-semibold">Review On</p>
                  <img src={Test1} alt="Review 1" />
                </div>
                <div>
                  <img src={Test2} alt="Review 2" />
                  <div> 7584+ Reviews</div>
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
                  <div> 7584+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
