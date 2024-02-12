/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
const DashboardContext = createContext();
const DashboardAdminLayout = () => {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col bg-gray-100 w-full">
          <NavbarAdmin />
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="relative"></div>
    </>
  );
};
export default DashboardAdminLayout;
