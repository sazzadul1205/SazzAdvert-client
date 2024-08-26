import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Careers from "../Pages/Careers/Careers"
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SuccessStories from "../Pages/SuccessStories/SuccessStories";

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
        element: <Services></Services>
      },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/SuccessStories",
        element: <SuccessStories></SuccessStories>
      }
    ],
  },
]);
