import Capabilities from "./Capabilities/Capabilities";
import HomeFirstBanner from "./HomeFirstBanner/HomeFirstBanner";
import Plaques from "./Plaques/Plaques";
import ProjectArea from "./ProjectArea/ProjectArea";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <HomeFirstBanner></HomeFirstBanner>
      <Plaques></Plaques>
      <WhatWeDo></WhatWeDo>
      <ProjectArea></ProjectArea>
      <Capabilities></Capabilities>
    </div>
  );
};

export default Home;
