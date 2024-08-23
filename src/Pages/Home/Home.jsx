import FAQ from "./FAQ/FAQ";
import FirstBanner from "./FirstBanner/FirstBanner";
import GetInTouch from "./GetInTouch/GetInTouch";
import SecondBanner from "./SecondBanner/SecondBanner";

const Home = () => {
  return (
    <div >
      <FirstBanner></FirstBanner>
      <GetInTouch></GetInTouch>
      <SecondBanner></SecondBanner>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
