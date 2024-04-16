import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import EstatesDetails from "../Pages/EstatesDetails";
import PrivateRoute from "../components/PrivateRoute";
import UpdaterProfile from "../Pages/UpdaterProfile";
import Blogs from "../Pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/propertyDetails/:id",
        element: (
          <PrivateRoute>
            <EstatesDetails></EstatesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: <UpdaterProfile></UpdaterProfile>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
