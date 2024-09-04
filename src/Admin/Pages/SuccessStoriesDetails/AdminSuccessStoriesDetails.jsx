import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AdminAwards from "../ServicesDetails/AdminAwards/AdminAwards";
import AdminPlaque from "../Home/AdminPlaque/AdminPlaque";
import AdminBigTestimonials from "../SucessStoriesTab/AdminBigTestimonials/AdminBigTestimonials";
import AdminBanner from "./AdminBanner/AdminBanner";
import AdminHiBootStrap from "./AdminHiBootStrap/AdminHiBootStrap";

const AdminSuccessStoriesDetails = () => {
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
        Contact Page
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
            Banner
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
            Award
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
            Hi Boot Straps
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
            Plaques
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
          <AdminBanner></AdminBanner>
        </TabPanel>
        <TabPanel>
          <AdminAwards></AdminAwards>
        </TabPanel>
        <TabPanel>
          <AdminHiBootStrap></AdminHiBootStrap>
        </TabPanel>
        <TabPanel>
          <AdminPlaque></AdminPlaque>
        </TabPanel>
        <TabPanel>
          <AdminBigTestimonials></AdminBigTestimonials>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminSuccessStoriesDetails;
