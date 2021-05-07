import React from 'react';
import '../styles/components/_driver-list.css';
import DriverListFilters from "./DriverListFilters";
import DriverList from "./DriverList";

function Dashboard() {
  return (
      <div className="Dashboard">
          <DriverListFilters/>
        <DriverList/>
      </div>
  );
}

export default Dashboard;
