import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../components/Main/Main";
const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound /> },
  { id: 2, link: "/", element: <Main /> },
];
const ADMIN_ROUTES = [];
const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
