import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../../data/router";
import { HOME_ROUTE } from "../../../data/router/utils/utils__publicRoutes";
import Home from "../pages/Home";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route index element={<Home />} />
          {publicRoutes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
