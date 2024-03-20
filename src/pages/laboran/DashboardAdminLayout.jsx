/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet, redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import customFetch from "../../utils/customFetch";
const DashboardContext = createContext();
export const loader = async () => {
  try {
    const result = await customFetch("v1/user/current-user", {
      withCredentials: true,
    });
    const { data } = result.data;
    const { user } = data;
    if (user.role != "laboran") {
      return redirect("/login");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};
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
