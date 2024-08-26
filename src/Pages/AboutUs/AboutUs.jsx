import Capabilities from "../Home/Capabilities/Capabilities";
import Brands from "../Shared/Brands/Brands";
import ProjectArea from "../Shared/ProjectArea/ProjectArea";
import Testimonials from "../Shared/Testimonials/Testimonials";
import FirstBanner from "./FirstBanner/FirstBanner";

const AboutUs = () => {
  return (
    <div>
      <FirstBanner></FirstBanner>
      <ProjectArea></ProjectArea>
      <Capabilities></Capabilities>
      <Brands></Brands>
      <Testimonials></Testimonials>
    </div>
  );
};

export default AboutUs;
