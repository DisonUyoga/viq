import "./App.css";
// import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login, { action as loginAction } from "./pages/Login";

import Layout from "./components/Layout/Layout";

import { lazy, Suspense } from "react";
import "./components/Contact/index.scss";
import Spinner from "./components/Spinner";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import ProtectedRoute from "./routers/ProtectedRoute";
import Contact from "./components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" action={loginAction} element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
