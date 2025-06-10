import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import ManageItems from "../pages/ManageItems";
import RecoveredItems from "../pages/RecoveredItems";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import TermsAndConditions from "../pages/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/lostAndFoundItems",
        Component: LostAndFoundItems,
      },
      {
        path: "/manageItems",
        Component: ManageItems,
      },
      {
        path: "/recoveredItems",
        Component: RecoveredItems,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/termsAndConditions",
        Component: TermsAndConditions,
      },
    ],
  },
]);

export default router;
