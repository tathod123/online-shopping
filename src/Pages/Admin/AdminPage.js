import React from "react";

import AdminSidebar from "../../Components/AdminComp/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <div className="grid grid-cols-12 h-lvh w-full">
        <div className="col-span-2">
          <AdminSidebar />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
