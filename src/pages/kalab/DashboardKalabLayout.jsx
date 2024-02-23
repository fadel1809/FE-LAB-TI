/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SidebarKalab";
import NavbarAdmin from "../../components/NavbarAdmin";
const DashboardContext = createContext();
const DashboardKalabLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex w-full bg-gray-100 ">
        <Sidebar />
        <div className="flex flex-col bg-gray-100 w-full h-dvh">
          <NavbarAdmin />
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="relative"></div>
    </div>
  );
};
export default DashboardKalabLayout;
