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
import FallbackRoute from "./components/fallback-route/FallbackRoute";
import { logoutAction } from "./actions/logout";
import { routeProtection } from "./loaders/route-protection";
import { loginAction } from "./actions/login";
import { productsLoader } from "./loaders/products";

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
            action: loginAction,
          },
          { path: "register", element: <Register /> },
        ],
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "*",
        element: <FallbackRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
