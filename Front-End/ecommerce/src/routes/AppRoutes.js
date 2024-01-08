import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { userContext } from "../App.js";
import { Products } from "../pages/Products/Products.js";
import { Login } from "../pages/Login/Login.js";
import { Dashbaord } from "../pages/Products/Dashboard/Dashbaord.js";
function AppRoutes() {
  const { user } = useContext(userContext);
  return (
    <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/dash" element={<Dashbaord />}></Route>
        <Route path='/:type' element={<Login/>}></Route>
    </Routes>
  );
}   

export default AppRoutes;