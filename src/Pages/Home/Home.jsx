import Audit from "./Audit/Audit";
import Awards from "./Awards/Awards";
import Blogs from "./Blogs/Blogs";
import Brands from "./Brands/Brands";
import Capabilities from "./Capabilities/Capabilities";
import HomeFirstBanner from "./HomeFirstBanner/HomeFirstBanner";
import OurProcess from "./OurProcess/OurProcess";
import Plaques from "./Plaques/Plaques";
import ProjectArea from "./ProjectArea/ProjectArea";
import SuccessStories from "./SuccessStories/SuccessStories";
import Testimonials from "./Testimonials/Testimonials";
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
