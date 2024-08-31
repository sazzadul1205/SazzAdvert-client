import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AdminHomeBanner from "./AdminHomeBanner/AdminHomeBanner";
import AdminPlaque from "./AdminPlaque/AdminPlaque";
import AdminWhatWeDo from "./AdminWhatWeDo/AdminWhatWeDo";
import AdminProjectArea from "./AdminProjectArea/AdminProjectArea";
import AdminCapabilities from "./AdminCapabilities/AdminCapabilities";
import AdminOurProcess from "./AdminOurProcess/AdminOurProcess";
import AdminAwards from "./AdminAwards/AdminAwards";
import AdminSuccessStories from "./AdminSuccessStories/AdminSuccessStories";
import AdminBrands from "./AdminBrands/AdminBrands";
import AdminTestimonials from "./AdminTestimonials/AdminTestimonials";
import AdminBlogs from "./AdminBlogs/AdminBlogs";

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const AdminHome = () => {
  return (
    <div className="bg-white py-4 text-black min-h-screen px-5">
      <h1 className="text-center font-bold text-2xl border-b pb-2">
        Home Page
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
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Plaque
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            What We Do
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Project Area
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Capabilities
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Our Process
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Award
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Success Stories
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Brands
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Testimonials
          </Tab>
          <Tab
            style={{
              background: getRandomColor(),
              color: "white",
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: "10px 15px",
              borderTopLeftRadius: "0.5rem", // 8px
              borderTopRightRadius: "0.5rem", // 8px
              marginLeft: "2px",
              marginTop: "2px",
            }}
          >
            Blogs
          </Tab>
        </TabList>
        <TabPanel className="pt-2">
          <AdminHomeBanner></AdminHomeBanner>
        </TabPanel>
        <TabPanel>
          <AdminPlaque></AdminPlaque>
        </TabPanel>
        <TabPanel>
          <AdminWhatWeDo></AdminWhatWeDo>
        </TabPanel>
        <TabPanel>
          <AdminProjectArea></AdminProjectArea>
        </TabPanel>
        <TabPanel>
          <AdminCapabilities></AdminCapabilities>
        </TabPanel>
        <TabPanel>
          <AdminOurProcess></AdminOurProcess>
        </TabPanel>
        <TabPanel>
          <AdminAwards></AdminAwards>
        </TabPanel>
        <TabPanel>
          <AdminSuccessStories></AdminSuccessStories>
        </TabPanel>
        <TabPanel>
          <AdminBrands></AdminBrands>
        </TabPanel>
        <TabPanel>
          <AdminTestimonials></AdminTestimonials>
        </TabPanel>
        <TabPanel>
          <AdminBlogs></AdminBlogs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminHome;
