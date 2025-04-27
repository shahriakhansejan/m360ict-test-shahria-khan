import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Root from "../Components/layout/Root";
import Products from "../Pages/Products";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* Root Layout */}
        <Route element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
