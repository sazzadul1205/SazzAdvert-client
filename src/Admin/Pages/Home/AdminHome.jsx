import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AdminHome = () => {
  return (
    <div className="bg-white py-4 text-black min-h-screen px-5">
      <h1 className="text-center font-bold">Home Page</h1>
      <Tabs>
        <TabList >
          <Tab>Banner</Tab>
          <Tab>Awards</Tab>
          <Tab>What We Do</Tab>
          <Tab>Project Area</Tab>
          <Tab>Capabilities</Tab>
          <Tab>Our Process</Tab>
          <Tab>Award</Tab>
          <Tab>Success Stories</Tab>
          <Tab>Brands</Tab>
          <Tab>Testimonials</Tab>
          <Tab>Audit</Tab>
          <Tab>Blogs</Tab>
        </TabList>

        <TabPanel className={'pt-5'}>
          <h2 className="text-center font-bold text-xl"> Banner</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminHome;
