/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import customFetch from "../../utils/customFetch";
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
const DashboardLaboran = createContext();
const DashboardAdminLayout = () => {
  const data = useLoaderData();
  return (
    <>
      <DashboardLaboran.Provider value={{ data }}>
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col bg-gray-100 w-full">
            <NavbarAdmin />
            <div className="container">
              <Outlet context={data} />
            </div>
          </div>
        </div>
        <div className="relative"></div>
      </DashboardLaboran.Provider>
    </>
  );
};
export const useDashboardLaboranContext = () => {
  return useContext(DashboardLaboran);
};

export default DashboardAdminLayout;
