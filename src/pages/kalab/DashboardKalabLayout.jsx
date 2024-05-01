/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Sidebar from "../../components/SidebarKalab";
import NavbarAdmin from "../../components/NavbarAdmin";
import customFetch from "../../utils/customFetch";

export const loader = async () => {
  try {
    const result = await customFetch("v1/user/current-user", {
      withCredentials: true,
    });
    const { data } = result.data;
    const { user } = data;
    if (user.role != "kalab") {
      return redirect("/login");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};
const DashboardKalab = createContext();

const DashboardKalabLayout = () => {
  const data = useLoaderData();
  return (
    <DashboardKalab.Provider value={{ data }}>
      <div className="bg-gray-100">
        <div className="flex w-full bg-gray-100 ">
          <Sidebar />
          <div className="flex flex-col bg-gray-100 w-full h-dvh">
            <NavbarAdmin />
            <div className="container">
              <Outlet context={data}/>
            </div>
          </div>
        </div>
        <div className="relative"></div>
      </div>
    </DashboardKalab.Provider>
  );
};
export const useDashboardkalabContext = () => {
  return useContext(DashboardKalab);
};
export default DashboardKalabLayout;
