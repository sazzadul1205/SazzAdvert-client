import Awards from "./Awards/Awards";
import Capabilities from "./Capabilities/Capabilities";
import HomeFirstBanner from "./HomeFirstBanner/HomeFirstBanner";
import OurProcess from "./OurProcess/OurProcess";
import Plaques from "./Plaques/Plaques";
import ProjectArea from "./ProjectArea/ProjectArea";
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
    </div>
  );
};

export default Home;
