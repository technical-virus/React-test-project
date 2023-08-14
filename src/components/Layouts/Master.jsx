import React from "react";
import "./css/dashboard.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import BreadCrum from "./BreadCrum";
import AddClient from "../Admin/ClientManagement/AddClient";
import CurrentClient from "../Admin/ClientManagement/CurrentClient";
import PendingApproval from "../Admin/ClientManagement/PendingApproval";
import Dashboard from "../Admin/Dashboard/Dashboard";
import { Route,Routes } from "react-router-dom";
import Products from "../Admin/Products/Products";
import ProductForm from "../Admin/Products/ProductForm";

const Master = () => {
  return (
    <>
      <main id="main">
        <Header />
        <div className="container-fluid mt-50 bg-light p-1">
          <Sidebar />
          {/* <BreadCrum /> */}
          <div className="mt-3 pb-3 px-3">
            <Routes>
              <Route path="super-admin">
                <Route path="/super-admin" element={<Dashboard />} />
                <Route path="/super-admin/add-client" element={<AddClient />} />
                <Route path="/super-admin/current-client" element={<CurrentClient />} />
                <Route path="/super-admin/pending-approval" element={<PendingApproval />} />
                <Route path="/super-admin/products" element={<Products />} />
                <Route path="/super-admin/products/create" element={<ProductForm />} />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
};

export default Master;
