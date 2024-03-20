/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet, redirect } from "react-router-dom";
import Sidebar from "../../components/SidebarKalab";
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
    console.log(user);
    if (user.role != "kalab") {
      return redirect("/login");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};
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
