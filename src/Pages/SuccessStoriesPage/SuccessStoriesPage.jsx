import Brands from "../Shared/Brands/Brands";
import FirstBanner from "./FirstBanner/FirstBanner";
import OurProcess from "./OurProcess/OurProcess";
import SuccessStories from "./SuccessStories/SuccessStories";
import Testimonials from "./Testimonials/Testimonials";

const SuccessStoriesPage = () => {
  return (
    <div>
      <FirstBanner></FirstBanner>
      <OurProcess></OurProcess>
      <SuccessStories></SuccessStories>
      <Brands></Brands>
      <Testimonials></Testimonials>
    </div>
  );
};

export default SuccessStoriesPage;
