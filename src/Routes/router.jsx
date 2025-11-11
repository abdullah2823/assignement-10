import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/Allproducts/AllProducts";
import MyImports from "../Pages/MyImports/MyImports";
import MyExports from "../Pages/MyExports/MyExports";
import AddExport from "../Pages/AddExports/AddExport";
import ProductDetails from "../Pages/Productdetails/ProductDetails";
import Login from "../Pages/Auth/Login";
import Authlayout from "../Layout/Authlayout";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/allproduct",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/import",
        element: <MyImports />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/export",
        element: <MyExports />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/addExport",
        element: <AddExport />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login", // ✅ সঠিক (relative path)
        element: <Login></Login>,
      },
      {
        path:"/auth/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
    loader: () => fetch("http://localhost:3000/products"),

  },
  {
    path: "*",
    element: <h1>Error 404 - Page Not Found</h1>,
  },
]);

export default router;
