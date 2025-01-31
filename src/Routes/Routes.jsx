import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Reviews from "../Pages/Reviews";
import ProductDetails from "../Pages/ProductDetails";
import ProductCards from "../Components/ProductCards"
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCards />,
            loader: () => fetch('../products.json'),
          },
          {
            path: '/category/:category',
            element: <ProductCards />,
            loader: () => fetch('../products.json'),
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children:[
          {
            path: '/dashboard',
            element: <Cart />,
          },
          {
            path: '/dashboard/cart',
            element: <Cart />,
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist />
          }
        ]
      },
      {
        path: '/reviews',
        element: <Reviews />,
        loader: ()=> fetch('../reviews.json')
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: () => fetch('../products.json'),
      },
    ]
  },
]);

export default routes;