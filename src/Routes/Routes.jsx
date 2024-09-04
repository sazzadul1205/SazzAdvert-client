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
import CareerDetails from "../Pages/CareerDetails/CareerDetails";
import SuccessStoryDetails from "../Pages/SuccessStoryDetails/SuccessStoryDetails";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Tags from "../Pages/Tags/Tags";
import Categories from "../Pages/Categories/Categories";
import Author from "../Pages/Author/Author";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminHome from "../Admin/Pages/Home/AdminHome";
import AdminCareers from "../Admin/Pages/Careers/AdminCareers";
import AdminServices from "../Admin/Pages/Services/AdminServices";
import AdminServicesDetails from "../Admin/Pages/ServicesDetails/AdminServicesDetails";
import AdminAboutUs from "../Admin/Pages/AboutUs/AdminAboutUs";
import AdminSuccessStoriesTab from "../Admin/Pages/SucessStoriesTab/AdminSuccessStoriesTab";

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
      {
        path: "/CareerDetails",
        element: <CareerDetails></CareerDetails>,
      },
      {
        path: "/SuccessStoryDetails",
        element: <SuccessStoryDetails></SuccessStoryDetails>,
      },
      {
        path: "/BlogDetails",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/Tags",
        element: <Tags></Tags>,
      },
      {
        path: "/Categories",
        element: <Categories></Categories>,
      },
      {
        path: "/Author",
        element: <Author></Author>,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/TermsCondition",
        element: <TermsConditions></TermsConditions>,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "AdminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "AdminCareers",
        element: <AdminCareers></AdminCareers>,
      },
      {
        path: "AdminServices",
        element: <AdminServices></AdminServices>,
      },
      {
        path: "AdminServicesDetails",
        element: <AdminServicesDetails></AdminServicesDetails>,
      },
      {
        path: "AdminAboutUs",
        element: <AdminAboutUs></AdminAboutUs>
      },
      {
        path: "AdminSuccessStories",
        element: <AdminSuccessStoriesTab></AdminSuccessStoriesTab>
      },
    ],
  },
]);
