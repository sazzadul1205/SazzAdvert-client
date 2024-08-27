import Brands from "../Shared/Brands/Brands";
import Testimonials from "../Shared/Testimonials/Testimonials";
import Awards from "./Awards/Awards";
import Banner from "./Banner/Banner";
import Marketing from "./Marketing/Marketing";

const ServiceDetails = () => {
  return (
    <div>
      <Banner></Banner>
      <Marketing></Marketing>
      <Awards></Awards>
      <Brands></Brands>
      <Testimonials></Testimonials>
    </div>
  );
};

export default ServiceDetails;
