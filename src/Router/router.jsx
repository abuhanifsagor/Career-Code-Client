import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import jobDeatils from "../Pages/jobDeatils/jobDeatils";

const loadJobsData = async () => {
  const res = await fetch("http://localhost:3000/jobs");
  const data = await res.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: loadJobsData,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/job/:id",
        Component: jobDeatils,
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/jobs/${params.id}`);
        },
      },
    ],
  },
]);

export default router;
