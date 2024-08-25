import Brands from "../Shared/Brands/Brands";
import Testimonials from "../Shared/Testimonials/Testimonials";
import Capabilities from "./Capabilities/Capabilities";
import FirstBanner from "./FirstBanner/FirstBanner";
import SecondBanner from "./SecondBanner/SecondBanner";

const Services = () => {
  return (
    <div>
      <FirstBanner></FirstBanner>
      <Capabilities></Capabilities>
      <SecondBanner></SecondBanner>
      <Brands></Brands>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Services;
