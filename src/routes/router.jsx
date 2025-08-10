import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddLostAndFoundItem from "../pages/AddLostAndFoundItem";
import ManageItems from "../pages/ManageItems";
import RecoveredItems from "../pages/RecoveredItems";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import TermsAndConditions from "../pages/TermsAndConditions";
import LatestItems from "../components/LatestItems";
import ItemDetails from "../pages/ItemDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../components/Profile";
import Analytics from "../pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addLostAndFoundItems",
        element: (
          <PrivateRoute>
            <AddLostAndFoundItem></AddLostAndFoundItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <ManageItems></ManageItems>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://track-back-server.vercel.app/items").then((res) =>
            res.json()
          ),
      },
      {
        path: "/recoveredItems",
        Component: RecoveredItems,
        loader: () =>
          fetch("https://track-back-server.vercel.app/items").then((res) =>
            res.json()
          ),
      },
      {
        path: "/allItems",
        Component: LatestItems,
        loader: () =>
          fetch("https://track-back-server.vercel.app/items").then((res) =>
            res.json()
          ),
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/analytics",
        Component: Analytics,
      },
      {
        path: "/items/:id",
        Component: ItemDetails,
        loader: ({ params }) =>
          fetch(`https://track-back-server.vercel.app/items/${params.id}`).then(
            (res) => res.json()
          ),
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
