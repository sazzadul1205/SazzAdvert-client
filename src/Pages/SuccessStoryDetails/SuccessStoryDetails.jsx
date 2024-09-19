import Plaques from "../Home/Plaques/Plaques";
import Testimonials from "../SuccessStoriesPage/LargeTestimonials/LargeTestimonials";
import Awards from "./Awards/Awards";
import Banner from "./Banner/Banner";
import HiBootstrap from "./HiBootstrap/HiBootstrap";


const SuccessStoryDetails = () => {
  return (
    <div>
      <Banner></Banner>
      <Awards></Awards>
      <HiBootstrap></HiBootstrap>
      <Plaques></Plaques>
      <Testimonials></Testimonials>
    </div>
  );
};

export default SuccessStoryDetails;
