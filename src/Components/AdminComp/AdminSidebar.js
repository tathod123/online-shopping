import React from "react";
import { CiBoxList, CiBoxes, CiImport, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const navlink = [
    {
      path: "admin/user",
      name: "User",
      icon: <CiUser />,
    },
    {
      path: "admin/product",
      name: "AllProduct",
      icon: <CiBoxList />,
    },
    {
      path: "admin/Addproduct",
      name: "Product",
      icon: <CiImport />,
    },
    {
      path: "admin/Order",
      name: "Orders",
      icon: <CiBoxes />,
    },
  ];
  return (
    <>
      <aside className="bg-gray-900 h-screen p-2">
        <div className="flex flex-col ">
          <div className="text-2xl font-bold text-white my-6 ml-2">
            Admin Dashboard
          </div>
          <div className="px-2">
            <nav>
              <ul className="flex flex-col gap-4">
                {navlink.map((links, i) => {
                  return (
                    <NavLink
                      className={({ isActive }) =>
                        isActive === true
                          ? "text-orange-700 transition-colors border-b-2   py-2  px-3 flex gap-3 items-center text-xl"
                          : "text-white flex gap-3 items-center text-xl"
                      }
                      key={i}
                      to={links.path}
                    >
                      <span>{links.icon}</span>
                      {links.name}
                    </NavLink>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
