import React from "react";
import { Route, Routes } from "react-router";
import Root from "../Components/layout/Root";
import ProductDetails from "../Components/Products/ProductDetails";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import EditProduct from "../Components/Products/EditProduct";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* Root Layout */}
        <Route element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
