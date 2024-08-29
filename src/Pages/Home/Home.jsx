import Brands from "../Shared/Brands/Brands";
import ProjectArea from "../Shared/ProjectArea/ProjectArea";
import Testimonials from "../Shared/Testimonials/Testimonials";
import Audit from "./Audit/Audit";
import Awards from "./Awards/Awards";
import Blogs from "./Blogs/Blogs";
import Capabilities from "./Capabilities/Capabilities";
import HomeFirstBanner from "./HomeFirstBanner/HomeFirstBanner";
import OurProcess from "./OurProcess/OurProcess";
import Plaques from "./Plaques/Plaques";
import SuccessStories from "./SuccessStories/SuccessStories";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <HomeFirstBanner></HomeFirstBanner>
      <Plaques></Plaques>
      <WhatWeDo></WhatWeDo>
      <ProjectArea></ProjectArea>
      <Capabilities></Capabilities>
      <OurProcess></OurProcess>
      <Awards></Awards>
      <SuccessStories></SuccessStories>
      <Brands></Brands>
      <Testimonials></Testimonials>
      <Audit></Audit>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
