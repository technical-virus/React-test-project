import React, { Fragment, useState } from "react";
import BreadCrum from "../../Layouts/BreadCrum";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState("amit");
  return (
    <Fragment>
      <BreadCrum data="Products" />
      <div class="card">
        <div class="card-header"><NavLink to="/super-admin/products/create" className="btn btn-primary btn-sm">Add New</NavLink></div>
        <div class="card-body">
          List
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
