import Brands from "../Shared/Brands/Brands";
import Awards from "./Awards/Awards";
import Banner from "./Banner/Banner";
import JoinTeam from "./JoinTeam/JoinTeam";
import OurTeamContent from "./OurTeamContent/OurTeamContent";
import Testimonials from "./Testimonials/Testimonials";

const OurTeam = () => {
  return (
    <div>
      <Banner></Banner>
      <Awards></Awards>
      <OurTeamContent></OurTeamContent>
      <Testimonials></Testimonials>
      <JoinTeam></JoinTeam>
      <Brands></Brands>
    </div>
  );
};

export default OurTeam;
