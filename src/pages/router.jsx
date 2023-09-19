import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import SignIn from "../pages/Signln";
import Register from "./Register.jsx";
import NotAllowed from "./NotAllowed";
import Cart from "./Cart";
import Category from "./Category";
import Admin from "./Admin";
import Category_login from "./Category_login";
import ProductDetail from "./ProductDetail";
import user from "../api/headers.js";
import OrdersAdmin from "./OrdersAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/index", element: <Index /> },
      { path: "/home", element: <Index /> },
      {
        path: "/register",
        element: <Register />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return user && redirect("/");
        },
      },
      {
        path: "/signin",
        element: <SignIn />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return user && redirect("/");
        },
      },
      {
        path: "/cart/:id",
        element: <Cart />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/signin");
        },
      },
      {
        path: "/category",
        element: <Category />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return user && redirect("/not-allowed");
        },
      },
      {
        path: "/admin",
        element: <Admin />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return (!user || user.role === 1) && redirect("/not-allowed");
        },
      },

      {
        path: "/admin/orders",
        element: <OrdersAdmin />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return (!user || user.role === 1) && redirect("/not-allowed");
        },
      },

      {
        path: "/products",
        element: <Category_login />,
        loader: (async) => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      },
      { path: "/not-allowed", element: <NotAllowed /> },
    ],
  },
]);

export default router;
