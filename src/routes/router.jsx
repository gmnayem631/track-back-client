import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import ManageItems from "../pages/ManageItems";
import RecoveredItems from "../pages/RecoveredItems";

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
    ],
  },
]);

export default router;
