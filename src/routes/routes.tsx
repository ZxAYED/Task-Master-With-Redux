import App from "@/App";

import { createBrowserRouter } from "react-router-dom";

import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        index: true,
        element: <Tasks></Tasks>,
      },
    ],
  },
]);
export default routes;
