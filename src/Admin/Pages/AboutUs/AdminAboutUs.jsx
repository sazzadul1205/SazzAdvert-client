import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AdminBrands from "../Home/AdminBrands/AdminBrands";
import AdminTestimonials from "../Home/AdminTestimonials/AdminTestimonials";
import AdminFirstBanner from "./AdminFirstBanner/AdminFirstBanner";
import AdminProjectArea from "../Home/AdminProjectArea/AdminProjectArea";
import AdminCapabilities from "../Home/AdminCapabilities/AdminCapabilities";

const AdminAboutUs = () => {
  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="bg-white py-4 text-black min-h-screen px-5">
      <h1 className="text-center font-bold text-2xl border-b pb-2">
        About Us Page
      </h1>
      <Tabs>
        <TabList>
          <Tab
            style={{
              background: getRandomColor(),
              borderBottom: "1px solid #ccc",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400, // Slightly bigger text
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px", // Add padding for better appearance
            }}
          >
            First Banner
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              borderBottom: "1px solid #ccc",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400, // Slightly bigger text
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px", // Add padding for better appearance
            }}
          >
            Project Area
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              borderBottom: "1px solid #ccc",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400, // Slightly bigger text
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px", // Add padding for better appearance
            }}
          >
            Capabilities
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              borderBottom: "1px solid #ccc",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400, // Slightly bigger text
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px", // Add padding for better appearance
            }}
          >
            Brands
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              borderBottom: "1px solid #ccc",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400, // Slightly bigger text
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px", // Add padding for better appearance
            }}
          >
            Testimonials
          </Tab>
        </TabList>
        <TabPanel>
          <AdminFirstBanner></AdminFirstBanner>
        </TabPanel>
        <TabPanel>
          <AdminProjectArea></AdminProjectArea>
        </TabPanel>
        <TabPanel>
          <AdminCapabilities></AdminCapabilities>
        </TabPanel>
        <TabPanel>
          <AdminBrands></AdminBrands>
        </TabPanel>
        <TabPanel>
          <AdminTestimonials></AdminTestimonials>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminAboutUs;
