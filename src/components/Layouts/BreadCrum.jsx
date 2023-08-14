import React from "react";

const BreadCrum = ({data}) => {
  return (
    <>
      <div className="row  pb-3 ">
        <div className="col-12 p-2">
          <h3 className="h3 text-capitalize">{data}</h3>
          <div className="breadcrumb border-bottom">
            {/* <span className="me-1">Client Management</span>/
            <span className="ms-1">Pending Approval</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrum;
