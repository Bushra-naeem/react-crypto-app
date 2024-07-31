import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Crypto />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
