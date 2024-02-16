import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./components/app/App";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Authenticate from "./components/authenticate/Authenticate";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import RouteError from "./components/route-error/RouteError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "authenticate",
        element: <Authenticate />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          { path: "register", element: <Register /> },
        ],
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "*",
        element: <RouteError />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
