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

// Example testimonials data from a database (replace with actual data fetching logic)
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
    category: "Theme Quality",
    testimonial:
      "“The customer support provided by Adli is top-notch. They are always available to help us with any queries or issues.”",
    name: "Jane Doe",
    position: "CEO at Bolster",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1502980426475-8d4e86a19d5a.webp",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="bg-white pt-24 text-black pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex ">
          <div className="w-[700px] mr-10">
            <p className="font-semibold">TESTIMONIALS</p>
            <h1 className="font-bold text-4xl">
              We help to achieve customers business goals
            </h1>
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
                        <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full"/>
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
          <div className="bg-[#faf4f4] flex-1 rounded-xl  ">
            <div className="py-28 px-20 ">
              <div className="flex gap-14 pb-12 border-b">
                <div>
                  <p className="font-semibold">Review On</p>
                  <img src={Test1} alt="" />
                </div>
                <div>
                  <img src={Test2} alt="" />
                  <div> 7584+ Reviews</div>{" "}
                </div>
              </div>
              <div className="flex gap-14 pt-12">
                <div>
                  <p className="font-semibold">Review On</p>
                  <img src={Test3} alt="" />
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
                  <div> 7584+ Reviews</div>{" "}
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
