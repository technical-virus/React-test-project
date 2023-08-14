import React, { Fragment, useState } from "react";
import BreadCrum from "../../Layouts/BreadCrum";

const Dashboard = () => {
  const [data,setData] = useState('amit');
  return (
    <Fragment>
      <BreadCrum data="Dasboard"/>
    </Fragment>
  );
};

export default Dashboard;
