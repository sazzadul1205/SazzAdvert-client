import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Careers from "../Pages/Careers/Careers";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SuccessStoriesPage from "../Pages/SuccessStoriesPage/SuccessStoriesPage";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import Contact from "../Pages/Contact/Contact";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import OurTeam from "../Pages/OurTeam/OurTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Careers",
        element: <Careers></Careers>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/ServicesDetails",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/SuccessStories",
        element: <SuccessStoriesPage></SuccessStoriesPage>,
      },
      {
        path: "/Blogs",
        element: <BlogsPage></BlogsPage>,
      },
      {
        path: "/Contacts",
        element: <Contact></Contact>,
      },
      {
        path: "/OurTeam",
        element: <OurTeam></OurTeam>,
      },
    ],
  },
]);
